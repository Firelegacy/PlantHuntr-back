import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';
import { PlantEntity } from '../plant/plant.entity';

@Entity({ name: 'collection_plants' })
export class CollectionPlantEntity {

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

  @ManyToOne(() => UserEntity, (user) => user.collection, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'user',
    referencedColumnName: 'id',
  })
  user: UserEntity;

  @ManyToOne(() => PlantEntity, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'plant',
    referencedColumnName: 'id',
  })
  plant: PlantEntity;
}