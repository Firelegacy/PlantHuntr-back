import {Entity, model, property, hasMany} from '@loopback/repository';
import {StockItem} from './stock-item.model';

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

  @hasMany(() => StockItem, {keyTo: 'id_stock'})
  stockItems: StockItem[];

  constructor(data?: Partial<Stock>) {
    super(data);
  }
}

export interface StockRelations {
  // describe navigational properties here
}

export type StockWithRelations = Stock & StockRelations;
