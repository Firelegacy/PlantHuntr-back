import {Entity, model, property} from '@loopback/repository';

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
  id_plant: string;

  @property({
    type: 'string',
    required: true,
  })
  surname: string;


  constructor(data?: Partial<Surname>) {
    super(data);
  }
}

export interface SurnameRelations {
  // describe navigational properties here
}

export type SurnameWithRelations = Surname & SurnameRelations;
