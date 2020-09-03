import {Entity, model, property, hasOne} from '@loopback/repository';
import {User} from './user.model';

@model()
export class Rating extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_rating?: string;
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

  @hasOne(() => User, {keyTo: 'id_user_seller'})
  id_user_seller: User;

  @hasOne(() => User, {keyTo: 'id_user_buyer'})
  id_user_buyer: User;

  constructor(data?: Partial<Rating>) {
    super(data);
  }
}

export interface RatingRelations {
  // describe navigational properties here
}

export type RatingWithRelations = Rating & RatingRelations;
