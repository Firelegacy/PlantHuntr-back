import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Auction } from '../auction/auction';
import { CollectionPlant } from '../collection/collection-plant';
import { User } from '../user/user';
import { Plant } from '../plant/plant';
import { DealType } from './enums/DealType';
import { TransactionType } from './enums/TransactionType';

@Entity({ name: 'plant_deal' })
export class PlantDeal {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_deal' })
  id: string;

  @Column({
    name: 'deal_type',
    type: 'enum',
    enum: DealType,
  })
  dealType: DealType;

  @Column({
    name: 'transaction_type',
    type: 'enum',
    enum: TransactionType,
  })
  transactionType: TransactionType;

  @Column({
    type: 'double',
    name: 'price',
  })
  price: number;

  @Column({
    type: 'double',
    name: 'shipping_max',
  })
  shippingMax: number;

  @Column({
    type: 'double',
    name: 'shipping_min',
  })
  shippingMin: number;

  @OneToOne(type => Plant)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  plant: Plant;

  @OneToOne(type => User)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  user: User;

  @OneToOne(type => User)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  acquirer: User;

  @OneToOne(type => CollectionPlant)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  collectionItem: CollectionPlant;

  @OneToOne(type => Auction)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  auction: Auction;
}