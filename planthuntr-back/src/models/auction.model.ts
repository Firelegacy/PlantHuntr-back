import {Entity, model, property} from '@loopback/repository';

@model()
export class Auction extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_auction?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_plant_deal: string;

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

  @property({
    type: 'string',
  })
  winning_bid?: string;


  constructor(data?: Partial<Auction>) {
    super(data);
  }
}

export interface AuctionRelations {
  // describe navigational properties here
}

export type AuctionWithRelations = Auction & AuctionRelations;
