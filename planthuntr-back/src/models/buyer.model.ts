import {Entity, model, property} from '@loopback/repository';

@model()
export class Buyer extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id_user_buyer: string;

  @property({
    type: 'string',
    required: true,
  })
  shipping_address: string;

  @property({
    type: 'string',
    required: true,
  })
  id_payment_method: string;

  @property({
    type: 'string',
    required: true,
  })
  id_stock_item: string;


  constructor(data?: Partial<Buyer>) {
    super(data);
  }
}

export interface BuyerRelations {
  // describe navigational properties here
}

export type BuyerWithRelations = Buyer & BuyerRelations;
