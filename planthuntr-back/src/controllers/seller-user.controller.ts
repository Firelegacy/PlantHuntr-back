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
  Seller,
  User,
} from '../models';
import {SellerRepository} from '../repositories';

export class SellerUserController {
  constructor(
    @repository(SellerRepository) protected sellerRepository: SellerRepository,
  ) { }

  @get('/sellers/{id}/user', {
    responses: {
      '200': {
        description: 'Seller has one User',
        content: {
          'application/json': {
            schema: getModelSchemaRef(User),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<User>,
  ): Promise<User> {
    return this.sellerRepository.id_user_seller(id).get(filter);
  }

  @post('/sellers/{id}/user', {
    responses: {
      '200': {
        description: 'Seller model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Seller.prototype.id_user_seller,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUserInSeller',
            exclude: ['id_user'],
            optional: ['id_user']
          }),
        },
      },
    }) user: Omit<User, 'id_user'>,
  ): Promise<User> {
    return this.sellerRepository.id_user_seller(id).create(user);
  }

  @patch('/sellers/{id}/user', {
    responses: {
      '200': {
        description: 'Seller.User PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: Partial<User>,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.sellerRepository.id_user_seller(id).patch(user, where);
  }

  @del('/sellers/{id}/user', {
    responses: {
      '200': {
        description: 'Seller.User DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.sellerRepository.id_user_seller(id).delete(where);
  }
}
