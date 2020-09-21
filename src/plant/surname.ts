import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plant } from './plant';

@Entity({ name: 'surname' })
@Index(['surname', 'plant'], { unique: true })
export class Surname {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_surname' })
  id: string;

  @Column({
    type: 'varchar',
    length: 128,
    name: 'surname',
  })
  surname: string;

  @OneToOne(type => Plant)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  plant: Plant;
}