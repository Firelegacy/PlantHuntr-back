import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Plant } from '../plant/plant';
import { User } from './user';

@Entity({ name: 'stock_plant' })
export class StockPlant {

  @PrimaryColumn('uuid', { name: 'id_user' })
  idUser: string;

  @PrimaryColumn('uuid', { name: 'id_plant' })
  idPlant: string;

  @ManyToOne(() => User, (user) => user.stock, {
    primary: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'id_user',
  })
  user: User;

  @ManyToOne(() => Plant, {
    primary: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'id_plant',
    referencedColumnName: 'id',
  })
  plant: Plant;

  @Column({
    type: 'double',
    name: 'price',
  })
  price: number;

  @Column({
    type: 'int',
    name: 'quantity',
    default: 1,
  })
  quantity: number;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'barcode',
  })
  barcode: string;
}
