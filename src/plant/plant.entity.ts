import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SurnameEntity } from './surname.entity';

@Entity({ name: 'plants' })
export class PlantEntity {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_plant' })
  id: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'common_name',
  })
  commonName: string;

  @Column({
    type: 'varchar',
    length: 100,
    name: 'scientific_name',
    nullable: true,
  })
  scientificName: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  family: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  subfamily: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  genus: string;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'picture_1',
    nullable: true,
  })
  firstPicture: string;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'picture_2',
    nullable: true,
  })
  secondPicture: string;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'picture_3',
    nullable: true,
  })
  thirdPicture: string;

  @Column({
    type: 'boolean',
    name: 'verified',
    default: false,
  })
  isVerified: boolean;

  @OneToMany(() => SurnameEntity, (surname) => surname.plant, { eager: true })
  surnames: SurnameEntity[];
}