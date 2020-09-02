import {Entity, model, property} from '@loopback/repository';

@model()
export class Stock extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_stock?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_seller: string;


  constructor(data?: Partial<Stock>) {
    super(data);
  }
}

export interface StockRelations {
  // describe navigational properties here
}

export type StockWithRelations = Stock & StockRelations;
