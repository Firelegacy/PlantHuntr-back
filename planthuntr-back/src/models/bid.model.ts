import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Auction} from './auction.model';
import {User} from './user.model';

@model()
export class Bid extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_bid?: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  @property({
    type: 'date',
    required: true,
  })
  timestamp: string;

  @belongsTo(() => Auction, {name: 'Auction'})
  id_auction: string;

  @belongsTo(() => User, {name: 'User'})
  id_user: string;

  constructor(data?: Partial<Bid>) {
    super(data);
  }
}

export interface BidRelations {
  // describe navigational properties here
}

export type BidWithRelations = Bid & BidRelations;
