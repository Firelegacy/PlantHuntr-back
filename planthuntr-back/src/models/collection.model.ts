import {Entity, model, property} from '@loopback/repository';

@model()
export class Collection extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_collection?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_user: string;


  constructor(data?: Partial<Collection>) {
    super(data);
  }
}

export interface CollectionRelations {
  // describe navigational properties here
}

export type CollectionWithRelations = Collection & CollectionRelations;
