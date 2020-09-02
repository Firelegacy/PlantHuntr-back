import {Entity, model, property} from '@loopback/repository';

@model()
export class Seller extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id_user_seller: string;

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


  constructor(data?: Partial<Seller>) {
    super(data);
  }
}

export interface SellerRelations {
  // describe navigational properties here
}

export type SellerWithRelations = Seller & SellerRelations;
