import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AuctionEntity } from './auction.entity';
import { UserEntity } from '../user/user.entity';
import { PlantEntity } from '../plant/plant.entity';
import { DealType } from '../enum/DealType';
import { TransactionType } from '../enum/TransactionType';
import { WantedSwapEntity } from './wanted-swap.entity';

@Entity({ name: 'plant_deals' })
export class PlantDealEntity {

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

  @OneToOne(() => PlantEntity)
  @JoinColumn({
    name: 'plant',
    referencedColumnName: 'id',
  })
  plant: PlantEntity;

  @OneToOne(() => UserEntity)
  @JoinColumn({
    name: 'user',
    referencedColumnName: 'id',
  })
  user: UserEntity;

  @OneToOne(() => UserEntity)
  @JoinColumn({
    name: 'acquirer',
    referencedColumnName: 'id',
  })
  acquirer: UserEntity;

  @OneToOne(() => AuctionEntity)
  auction: AuctionEntity;

  @OneToMany(() => WantedSwapEntity, wantedSwap => wantedSwap.plantDeal)
  wantedForSwap: WantedSwapEntity[];
}