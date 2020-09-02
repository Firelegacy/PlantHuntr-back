import {Entity, model, property} from '@loopback/repository';

@model()
export class Bid extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_bid?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_plant_deal: string;

  @property({
    type: 'string',
    required: true,
  })
  id_auction: string;

  @property({
    type: 'string',
    required: true,
  })
  id_user_buyer: string;

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


  constructor(data?: Partial<Bid>) {
    super(data);
  }
}

export interface BidRelations {
  // describe navigational properties here
}

export type BidWithRelations = Bid & BidRelations;
