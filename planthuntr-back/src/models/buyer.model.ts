import {Entity, model, property, hasOne} from '@loopback/repository';
import {User} from './user.model';
import {StockItem} from './stock-item.model';

@model()
export class Buyer extends Entity {

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
    type: 'number',
    default: 1,
  })
  quantity: number;

  @hasOne(() => User, {keyTo: 'id_user'})
  id_user_buyer: User;

  @hasOne(() => StockItem, {keyTo: 'id_stock_item'})
  id_stock_item: StockItem;

  constructor(data?: Partial<Buyer>) {
    super(data);
  }
}

export interface BuyerRelations {
  // describe navigational properties here
}

export type BuyerWithRelations = Buyer & BuyerRelations;
