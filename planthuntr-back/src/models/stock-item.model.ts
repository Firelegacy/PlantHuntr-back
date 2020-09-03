import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Stock} from './stock.model';
import {Plant} from './plant.model';

@model()
export class StockItem extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_stock_item?: string;
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

  @belongsTo(() => Stock, {name: 'stock'})
  id_stock: string;

  @hasOne(() => Plant, {keyTo: 'id_plant'})
  id_plant: Plant;

  constructor(data?: Partial<StockItem>) {
    super(data);
  }
}

export interface StockItemRelations {
  // describe navigational properties here
}

export type StockItemWithRelations = StockItem & StockItemRelations;
