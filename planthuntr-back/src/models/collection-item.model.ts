import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Collection} from './collection.model';
import {Plant} from './plant.model';

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
  })
  nickname?: string;

  @property({
    type: 'date',
  })
  acquisition_date?: string;

  @belongsTo(() => Collection, {name: 'collection'})
  id_collection: string;

  @hasOne(() => Plant, {keyTo: 'id_plant'})
  id_plant: Plant;

  constructor(data?: Partial<CollectionItem>) {
    super(data);
  }
}

export interface CollectionItemRelations {
  // describe navigational properties here
}

export type CollectionItemWithRelations = CollectionItem & CollectionItemRelations;
