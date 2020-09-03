import {Entity, model, property, belongsTo, hasMany, hasOne} from '@loopback/repository';
import {PlantDeal} from './plant-deal.model';
import {Bid} from './bid.model';

@model()
export class Auction extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_auction?: string;
  @property({
    type: 'date',
    required: true,
  })
  startdate: string;

  @property({
    type: 'date',
    required: true,
  })
  stop_date: string;

  @property({
    type: 'string',
    required: true,
  })
  timezone: string;

  @property({
    type: 'number',
    required: true,
  })
  starting_price: number;

  @property({
    type: 'number',
    default: 1,
  })
  bid_raise?: number;

  @belongsTo(() => PlantDeal, {name: 'PlantDeal'})
  id_plant_deal: string;

  @hasMany(() => Bid, {keyTo: 'id_auction'})
  bids: Bid[];

  @hasOne(() => Bid, {keyTo: 'id_bid'})
  winning_bid: Bid;

  constructor(data?: Partial<Auction>) {
    super(data);
  }
}

export interface AuctionRelations {
  // describe navigational properties here
}

export type AuctionWithRelations = Auction & AuctionRelations;
