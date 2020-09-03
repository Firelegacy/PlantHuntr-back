import {Entity, model, property, belongsTo, hasOne, hasMany} from '@loopback/repository';
import {User} from './user.model';
import {CollectionItem} from './collection-item.model';
import {Auction} from './auction.model';
import {PaymentMethod} from './payment-method.model';
import {DealPayment} from './deal-payment.model';

@model()
export class PlantDeal extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_deal?: string;
  @property({
    type: 'string',
    required: true,
  })
  transaction_type: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'number',
    required: true,
  })
  shipping_min: number;

  @property({
    type: 'number',
    required: true,
  })
  shipping_max: number;

  @property({
    type: 'string',
    required: true,
  })
  type_plant: string;

  @property({
    type: 'string',
  })
  acquirer?: string;

  @belongsTo(() => User, {name: 'user'})
  id_user: string;

  @hasOne(() => CollectionItem, {keyTo: 'id_collection_item'})
  id_collection_item: CollectionItem;

  @property({
    type: 'string',
  })
  id_plant?: string;

  @hasOne(() => Auction, {keyTo: 'id_plant_deal'})
  id_plant_deal: Auction;

  @hasMany(() => PaymentMethod, {through: {model: () => DealPayment, keyFrom: 'id_payment_method'}})
  paymentMethods: PaymentMethod[];

  constructor(data?: Partial<PlantDeal>) {
    super(data);
  }
}

export interface PlantDealRelations {
  // describe navigational properties here
}

export type PlantDealWithRelations = PlantDeal & PlantDealRelations;
