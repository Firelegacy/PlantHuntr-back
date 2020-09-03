import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  User,
  Wishlist,
} from '../models';
import {UserRepository} from '../repositories';

export class UserWishlistController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/wishlist', {
    responses: {
      '200': {
        description: 'User has one Wishlist',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Wishlist),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Wishlist>,
  ): Promise<Wishlist> {
    return this.userRepository.wishlist(id).get(filter);
  }

  @post('/users/{id}/wishlist', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Wishlist)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id_user,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wishlist, {
            title: 'NewWishlistInUser',
            exclude: ['id_wishlist'],
            optional: ['id_user']
          }),
        },
      },
    }) wishlist: Omit<Wishlist, 'id_wishlist'>,
  ): Promise<Wishlist> {
    return this.userRepository.wishlist(id).create(wishlist);
  }

  @patch('/users/{id}/wishlist', {
    responses: {
      '200': {
        description: 'User.Wishlist PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Wishlist, {partial: true}),
        },
      },
    })
    wishlist: Partial<Wishlist>,
    @param.query.object('where', getWhereSchemaFor(Wishlist)) where?: Where<Wishlist>,
  ): Promise<Count> {
    return this.userRepository.wishlist(id).patch(wishlist, where);
  }

  @del('/users/{id}/wishlist', {
    responses: {
      '200': {
        description: 'User.Wishlist DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Wishlist)) where?: Where<Wishlist>,
  ): Promise<Count> {
    return this.userRepository.wishlist(id).delete(where);
  }
}
