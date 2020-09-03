import {Entity, model, property} from '@loopback/repository';

@model()
export class DealPayment extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_deal_payment?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_plant_deal: string;

  @property({
    type: 'string',
  })
  id_payment_method?: string;

  constructor(data?: Partial<DealPayment>) {
    super(data);
  }
}

export interface DealPaymentRelations {
  // describe navigational properties here
}

export type DealPaymentWithRelations = DealPayment & DealPaymentRelations;
