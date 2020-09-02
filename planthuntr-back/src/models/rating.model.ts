import {Entity, model, property} from '@loopback/repository';

@model()
export class Rating extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_rating?: string;

  @property({
    type: 'string',
    required: true,
  })
  id_user_seller: string;

  @property({
    type: 'string',
    required: true,
  })
  id_user_buyer: string;

  @property({
    type: 'number',
    required: true,
  })
  rating_seller: number;

  @property({
    type: 'number',
    required: true,
  })
  rating_buyer: number;

  @property({
    type: 'string',
  })
  comment_seller?: string;

  @property({
    type: 'string',
  })
  comment_buyer?: string;


  constructor(data?: Partial<Rating>) {
    super(data);
  }
}

export interface RatingRelations {
  // describe navigational properties here
}

export type RatingWithRelations = Rating & RatingRelations;
