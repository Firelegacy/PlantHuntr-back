import {Entity, model, property} from '@loopback/repository';

@model()
export class WantedSwap extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_swap?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_plant: string;

  @property({
    type: 'string',
    required: true,
  })
  id_plant_deal: string;

  @property({
    type: 'number',
    default: 0,
  })
  amount?: number;


  constructor(data?: Partial<WantedSwap>) {
    super(data);
  }
}

export interface WantedSwapRelations {
  // describe navigational properties here
}

export type WantedSwapWithRelations = WantedSwap & WantedSwapRelations;
