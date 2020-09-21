import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PlantDeal } from '../plant-deal/plant-deal';
import { Bid } from './bid';

@Entity({ name: 'auction' })
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
  })
  startingPrice: number;

  @Column({
    type: 'int',
    name: 'bid_raise',
    nullable: true,
    default: 1,
  })
  bidRaise: number;

  @OneToOne(type => Bid)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  winningBid: Bid;

  @OneToOne(type => PlantDeal)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  plantDeal: PlantDeal;
}
