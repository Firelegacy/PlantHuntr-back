import {Entity, model, property} from '@loopback/repository';

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
  id_user: string;

  @property({
    type: 'string',
    required: true,
  })
  id_collection_item: string;

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


  constructor(data?: Partial<PlantDeal>) {
    super(data);
  }
}

export interface PlantDealRelations {
  // describe navigational properties here
}

export type PlantDealWithRelations = PlantDeal & PlantDealRelations;
