import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PlantDealEntity } from './plant-deal.entity';
import { BidEntity } from './bid.entity';
import { AuctionStatus } from '../enum/AuctionStatus';

@Entity({ name: 'auctions' })
export class AuctionEntity {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_auction' })
  id: string;

  @Column({
    type: 'datetime',
    name: 'start_date',
  })
  startDate: Date;

  @Column({
    type: 'datetime',
    name: 'stop_date',
  })
  stopDate: Date;

  @Column({
    type: 'varchar',
    length: 3,
  })
  timezone: string;

  @Column({
    type: 'double',
    name: 'starting_price',
    default: 1,
  })
  startingPrice: number;

  @Column({
    type: 'int',
    name: 'bid_raise',
    nullable: true,
    default: 1,
  })
  bidRaise: number;

  @OneToOne(() => BidEntity, {
    nullable: true,
  })
  @JoinColumn({
    name: 'winning_bid',
    referencedColumnName: 'id',
  })
  winningBid: BidEntity;

  @Column({
    name: 'status',
    type: 'enum',
    enum: AuctionStatus,
    default: AuctionStatus.OPEN,
  })
  status: AuctionStatus;

  @OneToOne(() => PlantDealEntity, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'plant_deal',
    referencedColumnName: 'id',
  })
  plantDeal: PlantDealEntity;

  @OneToMany(() => BidEntity, (bid) => bid.auction)
  bids: BidEntity[];
}
