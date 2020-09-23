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
    name: 'id_plant',
  })
  plantId: string;

  @ManyToOne(() => Plant, (plant) => plant.surnames, {
    primary: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'id_plant' })
  plant: Plant;
}