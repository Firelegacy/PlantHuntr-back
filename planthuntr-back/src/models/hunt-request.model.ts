import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {User} from './user.model';
import {Plant} from './plant.model';

@model()
export class HuntRequest extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_hunt?: string;
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

  @belongsTo(() => User, {name: 'requester'})
  id_user: string;

  @hasOne(() => Plant, {keyTo: 'id_plant'})
  id_plant: Plant;

  constructor(data?: Partial<HuntRequest>) {
    super(data);
  }
}

export interface HuntRequestRelations {
  // describe navigational properties here
}

export type HuntRequestWithRelations = HuntRequest & HuntRequestRelations;
