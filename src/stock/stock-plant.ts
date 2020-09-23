import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Stock } from './stock';
import { Plant } from '../plant/plant';

@Entity({ name: 'stock_plant' })
export class StockPlant {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_stock_plant' })
  id: string;

  @Column({
    type: 'double',
    name: 'price',
  })
  price: number;

  @Column({
    type: 'int',
    name: 'quantity',
  })
  quantity: number;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'barcode',
  })
  barcode: string;

  @OneToOne(() => Stock)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  stock: Stock;

  @OneToOne(() => Plant)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  plant: Plant;
}
