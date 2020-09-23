import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';
import { Plant } from '../plant/plant';

@Entity({ name: 'collection_plants' })
export class CollectionPlant {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_collection_plant' })
  id: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  nickname: string;

  @Column({
    type: 'datetime',
    name: 'acquisition_date',
  })
  acquisitionDate: Date;

  @ManyToOne(() => User, (user) => user.collection, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'user',
    referencedColumnName: 'id',
  })
  user: User;

  @ManyToOne(() => Plant, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'plant',
    referencedColumnName: 'id',
  })
  plant: Plant;
}