import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CreatePlantDTO } from './dto/CreatePlantDTO';
import { UpdatePlantDTO } from './dto/UpdatePlantDTO';
import { PlantService } from './plant.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('plants')
export class PlantController {
  constructor(private plantService: PlantService) {}

  @Post()
  create(@Body() createPlantDTO: CreatePlantDTO) {
    Logger.log('This action adds a new Plant in plants');
    return this.plantService.create(createPlantDTO);
  }

  @Get()
  findAll() {
    Logger.log('This action returns all plants');
    return this.plantService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    Logger.log(`This action returns the plant with the given id : #${id}`);
    return this.plantService.findById(id);
  }

  @Get('search/:value')
  search(@Param('value') value: string) {
    Logger.log(`This action looks if a plant exist with the given name`);
    return this.plantService.search(value);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlantDTO: UpdatePlantDTO) {
    Logger.log(`This action updates the plant with given id : #${id}`);
    return this.plantService.update(id, updatePlantDTO);
  }

  @ApiBody({
    schema: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
  })
  @Post('/:id/surnames')
  addSurnames(@Param('id') id: string, @Body('surnames') surnames: string[]) {
    Logger.log(`This action add surname(s) to #${id} plant`);
    return this.plantService.addSurnames(id, surnames);
  }
}
