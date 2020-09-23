import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PlantDeal } from './plant-deal';
import { Bid } from './bid';
import { AuctionStatus } from '../enum/AuctionStatus';

@Entity({ name: 'auctions' })
export class Auction {

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

  @OneToOne(() => Bid, {
    nullable: true,
  })
  @JoinColumn({
    name: 'winning_bid',
    referencedColumnName: 'id',
  })
  winningBid: Bid;

  @Column({
    name: 'status',
    type: 'enum',
    enum: AuctionStatus,
    default: AuctionStatus.OPEN,
  })
  status: AuctionStatus;

  @OneToOne(() => PlantDeal, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'plant_deal',
    referencedColumnName: 'id',
  })
  plantDeal: PlantDeal;

  @OneToMany(() => Bid, (bid) => bid.auction)
  bids: Bid[];
}
