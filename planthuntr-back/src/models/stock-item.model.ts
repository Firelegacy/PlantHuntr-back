import {Entity, model, property} from '@loopback/repository';

@model()
export class StockItem extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_stock_item?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_plant: string;

  @property({
    type: 'string',
    required: true,
  })
  id_stock: string;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @property({
    type: 'number',
    required: true,
  })
  price: number;


  constructor(data?: Partial<StockItem>) {
    super(data);
  }
}

export interface StockItemRelations {
  // describe navigational properties here
}

export type StockItemWithRelations = StockItem & StockItemRelations;
