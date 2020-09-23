import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Plant } from './plant';

@Entity({ name: 'surname' })
export class Surname {

  @PrimaryColumn({
    type: 'varchar',
    length: 128,
    name: 'surname',
  })
  surname: string;

  @PrimaryColumn({
    type: 'uuid',
    name: 'plant_id',
  })
  @ManyToOne(() => Plant, (plant) => plant.surnames, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  plant: Plant;
}