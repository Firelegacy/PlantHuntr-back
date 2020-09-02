import {Entity, model, property} from '@loopback/repository';

@model()
export class Wishlist extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_wishlist?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_user: string;

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


  constructor(data?: Partial<Wishlist>) {
    super(data);
  }
}

export interface WishlistRelations {
  // describe navigational properties here
}

export type WishlistWithRelations = Wishlist & WishlistRelations;
