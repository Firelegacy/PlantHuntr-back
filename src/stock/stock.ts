import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Seller } from '../seller/seller';

@Entity({ name: 'stock' })
export class Stock {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_stock' })
  id: string;

  @OneToOne(() => Seller)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  seller: Seller;
}

