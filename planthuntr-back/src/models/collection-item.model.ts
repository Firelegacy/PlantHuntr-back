import {Entity, model, property} from '@loopback/repository';

@model()
export class CollectionItem extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_collection_item?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_collection: string;

  @property({
    type: 'string',
    required: true,
  })
  id_plant: string;

  @property({
    type: 'string',
  })
  nickname?: string;

  @property({
    type: 'date',
  })
  acquisition_date?: string;

  constructor(data?: Partial<CollectionItem>) {
    super(data);
  }
}

export interface CollectionItemRelations {
  // describe navigational properties here
}

export type CollectionItemWithRelations = CollectionItem & CollectionItemRelations;
