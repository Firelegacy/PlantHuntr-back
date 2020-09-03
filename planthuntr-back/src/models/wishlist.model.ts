import {Entity, model, property, hasMany, belongsTo} from '@loopback/repository';
import {WishlistItem} from './wishlist-item.model';
import {User} from './user.model';

@model()
export class Wishlist extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_wishlist?: string;
  @property({
    type: 'date',
    required: true,
  })
  creation_date: string;

  @property({
    type: 'string',
    default: Wishlist,
  })
  name?: string;

  @hasMany(() => WishlistItem, {keyTo: 'id_wishlist'})
  wishlistItems: WishlistItem[];

  @belongsTo(() => User, {name: 'User'})
  id_user: string;

  constructor(data?: Partial<Wishlist>) {
    super(data);
  }
}

export interface WishlistRelations {
  // describe navigational properties here
}

export type WishlistWithRelations = Wishlist & WishlistRelations;
