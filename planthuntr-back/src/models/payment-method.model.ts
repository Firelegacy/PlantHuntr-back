import {Entity, model, property} from '@loopback/repository';

@model()
export class PaymentMethod extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_payment_method?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<PaymentMethod>) {
    super(data);
  }
}

export interface PaymentMethodRelations {
  // describe navigational properties here
}

export type PaymentMethodWithRelations = PaymentMethod & PaymentMethodRelations;
