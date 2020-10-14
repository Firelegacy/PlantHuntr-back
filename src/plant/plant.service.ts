import { CacheKey, HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreatePlantDto } from './dto/CreatePlant.dto';
import { PlantEntity } from './plant.entity';
import { getRepository, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatePlantDto } from './dto/UpdatePlant.dto';
import { SurnameEntity } from './surname.entity';
import { validate } from 'class-validator';

@Injectable()
export class PlantService {
  constructor(
    @InjectRepository(PlantEntity)
    private plantRepository: Repository<PlantEntity> = getRepository(PlantEntity),
    @InjectRepository(SurnameEntity)
    private surnameRepository: Repository<SurnameEntity> = getRepository(SurnameEntity),
  ) {}

  @CacheKey('plants')
  public async findAll(): Promise<PlantEntity[]> {
    return await this.plantRepository.find();
  }

  public async findById(id: string): Promise<PlantEntity> {
    return await this.exists(id);
  }

  public async search(name: string): Promise<PlantEntity[] | null> {
    return await this.plantRepository
      .createQueryBuilder('plant')
      .select('plant')
      .leftJoinAndSelect('plant.surnames', 'surname')
      .where('plant.commonName = :name', { name: name })
      .orWhere('plant.scientificName = :name', { name: name })
      .orWhere('plant.family = :name', { name: name })
      .orWhere('plant.subfamily = :name', { name: name })
      .orWhere('plant.genus = :name', { name: name })
      .orWhere('surname.surname = :name', { name: name })
      .orderBy('plant.commonName IS NOT NULL', 'ASC')
      .addOrderBy('plant.scientificName IS NOT NULL', 'ASC')
      .addOrderBy('plant.family IS NOT NULL', 'ASC')
      .addOrderBy('plant.subfamily IS NOT NULL', 'ASC')
      .addOrderBy('plant.genus IS NOT NULL', 'ASC')
      .addOrderBy('surname.surname IS NOT NULL', 'ASC')
      .getMany();
  }

  public async create(createPlantDTO: CreatePlantDto): Promise<PlantEntity> {
    if (createPlantDTO.isVerified === undefined) { createPlantDTO.isVerified = false;}
    await PlantService.validatePlant(createPlantDTO);
    return await this.plantRepository.save(createPlantDTO);
  }

  public async update(id: string, newValue: UpdatePlantDto): Promise<PlantEntity | null> {
    await this.exists(id);
    await this.plantRepository.update(id, newValue);
    return await this.plantRepository.findOne(id);
  }

  public async addSurname(id: string, surname: string, plant: PlantEntity): Promise<SurnameEntity> {
    await this.verifyIfUniqueSurname(id, surname);
    const newSurname = new SurnameEntity();
    newSurname.plant = plant;
    newSurname.surname = surname;
    newSurname.plantId = id;
    Logger.warn(newSurname);
    await PlantService.validateSurname(newSurname);
    return await this.surnameRepository.save(newSurname);
  }

  public async addSurnames(id: string, surnames: string[]) {
    const plant: PlantEntity = await this.exists(id);
    let createdSurname: SurnameEntity;
    const result: SurnameEntity[] = [];
    for (const surname of surnames) {
      createdSurname = await this.addSurname(id, surname, plant);
      result.push(createdSurname);
    }
    return result;
  }

  private async exists(id: string) {
    const plant = await this.plantRepository.findOne(id);

    if (!plant) {
      throw new HttpException('error.plant-not-found', HttpStatus.NOT_FOUND);
    }
    return plant;
  }

  private async verifyIfUniqueSurname(id: string, surname: string) {
    if (await this.surnameRepository.createQueryBuilder('surname')
      .where('surname.id_plant = :id', { id: id })
      .andWhere('surname.surname = :surname', { surname: surname })
      .getOne()
    ) {
      throw new HttpException('error.duplicate-surname', HttpStatus.CONFLICT);
    }
  }

  private static async validatePlant(plant: CreatePlantDto) {
    const errors = await validate(plant);
    if (errors.length > 0) {
      const _errors = errors.toString();
      throw new HttpException({ message: 'PlantEntity data validation failed', _errors }, HttpStatus.BAD_REQUEST);
    }
  }

  private static async validateSurname(surname: SurnameEntity) {
    const errors = await validate(surname);
    if (errors.length > 0) {
      const _errors = errors.toString();
      throw new HttpException({ message: 'SurnameEntity data validation failed', _errors }, HttpStatus.BAD_REQUEST);
    }
  }
}
