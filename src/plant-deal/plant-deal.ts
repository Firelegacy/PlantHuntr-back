import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Auction } from '../auction/auction';
import { User } from '../user/user';
import { Plant } from '../plant/plant';
import { DealType } from '../enum/DealType';
import { TransactionType } from '../enum/TransactionType';

@Entity({ name: 'plant_deal' })
export class PlantDeal {

  @PrimaryGeneratedColumn(
    'uuid',
    {
      name: 'id_deal',
    })
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

  @OneToOne(() => Plant)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  plant: Plant;

  @OneToOne(() => User)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  user: User;

  @OneToOne(() => User)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  acquirer: User;

  @OneToOne(() => Auction)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  auction: Auction;

  /*@OneToMany(() => DealPaymentMethod)
   @JoinTable({ name: 'deal_payment_methods' })
   paymentMethods: PaymentMethod[];

   @OneToMany(() => WantedSwap, wantedSwap => wantedSwap.plantDeal)
   wantedForSwap: WantedSwap[];

   */
}