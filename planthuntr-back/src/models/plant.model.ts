import {Entity, model, property, hasMany} from '@loopback/repository';
import {Surname} from './surname.model';

@model()
export class Plant extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_plant?: string;

  @property({
    type: 'string',
    required: true,
  })
  common_name: string;

  @property({
    type: 'string',
  })
  scientific_name?: string;

  @property({
    type: 'string',
    required: true,
  })
  family: string;

  @property({
    type: 'string',
  })
  subfamily?: string;

  @property({
    type: 'string',
    required: true,
  })
  genus: string;

  @property({
    type: 'string',
  })
  picture_one?: string;

  @property({
    type: 'string',
  })
  picture_two?: string;

  @property({
    type: 'string',
  })
  picture_three?: string;

  @hasMany(() => Surname, {keyTo: 'id_plant'})
  surnames: Surname[];

  constructor(data?: Partial<Plant>) {
    super(data);
  }
}

export interface PlantRelations {
  // describe navigational properties here
}

export type PlantWithRelations = Plant & PlantRelations;
