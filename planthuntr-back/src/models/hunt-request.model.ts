import {Entity, model, property} from '@loopback/repository';

@model()
export class HuntRequest extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_hunt?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_user: string;

  @property({
    type: 'date',
    required: true,
  })
  request_date: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'date',
    required: true,
  })
  last_update: string;


  constructor(data?: Partial<HuntRequest>) {
    super(data);
  }
}

export interface HuntRequestRelations {
  // describe navigational properties here
}

export type HuntRequestWithRelations = HuntRequest & HuntRequestRelations;
