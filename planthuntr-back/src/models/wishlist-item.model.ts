import {Entity, model, property} from '@loopback/repository';

@model()
export class WishlistItem extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_wishlist_item?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_wishlist: string;

  @property({
    type: 'string',
    required: true,
  })
  id_plant: string;


  constructor(data?: Partial<WishlistItem>) {
    super(data);
  }
}

export interface WishlistItemRelations {
  // describe navigational properties here
}

export type WishlistItemWithRelations = WishlistItem & WishlistItemRelations;
