import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { StockPlant } from './stock-plant';
import { User } from '../user/user';
import { PaymentMethod } from '../enum/PaymentMethod';

@Entity({ name: 'sold_stock_plant' })
export class SoldStockPlant {

  @PrimaryGeneratedColumn('uuid', { name: 'id_sale' })
  id: string;

  @Column({
    type: 'varchar',
    length: 128,
    name: 'shipping_address',
  })
  shippingAddress: string;

  @Column({
    type: 'varchar',
    length: 20,
    name: 'postal_code',
  })
  postalCode: string;

  @Column({
    type: 'int',
    name: 'quantity',
  })
  quantity: number;

  @OneToOne(() => StockPlant)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  stockPlant: StockPlant;

  @OneToOne(() => User)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  buyer: User;

  @OneToOne(() => User)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  paymentMethod: PaymentMethod;

}
