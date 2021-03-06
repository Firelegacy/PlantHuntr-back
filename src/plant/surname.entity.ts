import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { PlantEntity } from './plant.entity';
import { Exclude } from 'class-transformer';

@Entity({ name: 'surnames' })
export class SurnameEntity {

  @Exclude()
  @PrimaryColumn({
    type: 'uuid',
    name: 'id_plant',
    select: false,
  })
  plantId: string;

  @PrimaryColumn({
    type: 'varchar',
    length: 128,
    name: 'surname',
  })
  surname: string;

  @ManyToOne(() => PlantEntity, (plant) => plant.surnames, {
    primary: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_plant' })
  plant: PlantEntity;

}