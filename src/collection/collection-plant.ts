import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plant } from '../plant/plant';
import { Collection } from './collection';

@Entity({ name: 'collection_plant' })
export class CollectionPlant {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_collection_plant' })
  id: string;

  @Column({
    type: 'varchar',
    length: 30,
  })
  nickname: string;

  @Column({
    type: 'datetime',
    name: 'acquisition_date',
  })
  acquisitionDate: Date;

  @OneToOne(type => Collection)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  collection: Collection;

  @OneToOne(type => Plant)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  plant: Plant;
}
