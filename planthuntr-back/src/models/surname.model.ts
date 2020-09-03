import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Plant} from './plant.model';

@model()
export class Surname extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_surname?: string;
  @property({
    type: 'string',
    required: true,
  })
  surname: string;

  @belongsTo(() => Plant, {name: 'Plant'})
  id_plant: string;

  constructor(data?: Partial<Surname>) {
    super(data);
  }
}

export interface SurnameRelations {
  // describe navigational properties here
}

export type SurnameWithRelations = Surname & SurnameRelations;
