import {Entity, model, property, hasOne} from '@loopback/repository';
import {PlantDeal} from './plant-deal.model';
import {Plant} from './plant.model';

@model()
export class WantedSwap extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_swap?: string;

  @property({
    type: 'number',
    default: 0,
  })
  amount?: number;

  @hasOne(() => Plant, {keyTo: 'id_plant'})
  id_plant: Plant;

  @hasOne(() => PlantDeal, {keyTo: 'id_plant_deal'})
  id_plant_deal: PlantDeal;

  constructor(data?: Partial<WantedSwap>) {
    super(data);
  }
}

export interface WantedSwapRelations {
  // describe navigational properties here
}

export type WantedSwapWithRelations = WantedSwap & WantedSwapRelations;
