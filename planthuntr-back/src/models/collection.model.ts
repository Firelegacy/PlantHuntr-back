import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {User} from './user.model';
import {CollectionItem} from './collection-item.model';

@model()
export class Collection extends Entity {
  @belongsTo(() => User, {name: 'owner'})
  id_user: string;

  @hasMany(() => CollectionItem, {keyTo: 'id_collection'})
  collectionItems: CollectionItem[];

  constructor(data?: Partial<Collection>) {
    super(data);
  }
}

export interface CollectionRelations {
  // describe navigational properties here
}

export type CollectionWithRelations = Collection & CollectionRelations;
