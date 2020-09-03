import {Entity, model, property, hasOne, hasMany} from '@loopback/repository';
import {Wishlist} from './wishlist.model';
import {Collection} from './collection.model';
import {HuntRequest} from './hunt-request.model';
import {PlantDeal} from './plant-deal.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id_user?: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'date',
    required: true,
  })
  birthday: string;

  @property({
    type: 'string',
    required: true,
  })
  country: string;

  @property({
    type: 'string',
  })
  town?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  verified: boolean;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  phone?: string;

  @property({
    type: 'string',
    required: true,
  })
  user_type: string;

  @property({
    type: 'string',
    required: true,
  })
  firstname: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname: string;

  @property({
    type: 'string',
    required: true,
  })
  auth_client: string;

  @property({
    type: 'string',
  })
  verification_pic?: string;

  @hasOne(() => Wishlist, {keyTo: 'id_user'})
  wishlist: Wishlist;

  @hasOne(() => Collection, {keyTo: 'id_user'})
  collection: Collection;

  @hasMany(() => HuntRequest, {keyTo: 'id_user'})
  huntRequests: HuntRequest[];

  @property({
    type: 'string',
  })
  id_user_seller?: string;

  @property({
    type: 'string',
  })
  id_user_buyer?: string;

  @hasMany(() => PlantDeal, {keyTo: 'id_user'})
  plantDeals: PlantDeal[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
