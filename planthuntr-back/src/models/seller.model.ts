import {Entity, model, property, hasOne} from '@loopback/repository';
import {User} from './user.model';

@model()
export class Seller extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  address: string;

  @property({
    type: 'string',
    required: true,
  })
  company_id_number: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
  })
  business_phone?: string;

  @property({
    type: 'string',
  })
  business_email?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  paypal: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  sepa: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  visa_mastercard: boolean;

  @hasOne(() => User, {keyTo: 'id_user'})
  id_user_seller: User;

  constructor(data?: Partial<Seller>) {
    super(data);
  }
}

export interface SellerRelations {
  // describe navigational properties here
}

export type SellerWithRelations = Seller & SellerRelations;
