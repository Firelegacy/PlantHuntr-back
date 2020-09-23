import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, Unique } from 'typeorm';
import { Plant } from '../plant/plant';
import { User } from './user';

@Entity({ name: 'stock_plants' })
@Unique('seller_plant', ['user', 'plant'])
export class StockPlant {

  @PrimaryColumn('uuid', { name: 'id_stock_plant' })
  id: string;

  @ManyToOne(() => User, (user) => user.stock, {
    primary: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'user',
  })
  user: User;

  @ManyToOne(() => Plant, {
    primary: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'plant',
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
