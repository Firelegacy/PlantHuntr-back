import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'plant' })
export class Plant {

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
  })
  scientificName: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  family: string;

  @Column({
    type: 'varchar',
    length: 100,
  })
  subfamily: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  genus: string;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'picture_one',
  })
  firstPicture: string;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'picture_two',
  })
  secondPicture: string;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'picture_three',
  })
  thirdPicture: string;

  @Column({
    type: 'boolean',
    name: 'verified',
  })
  isVerified: boolean;
}