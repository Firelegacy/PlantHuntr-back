import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Wishlist} from './wishlist.model';
import {Plant} from './plant.model';

@model()
export class WishlistItem extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_wishlist_item?: string;
  @belongsTo(() => Wishlist, {name: 'Wishlist'})
  id_wishlist: string;

  @hasOne(() => Plant, {keyTo: 'id_plant'})
  id_plant: Plant;

  constructor(data?: Partial<WishlistItem>) {
    super(data);
  }
}

export interface WishlistItemRelations {
  // describe navigational properties here
}

export type WishlistItemWithRelations = WishlistItem & WishlistItemRelations;
