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
  Buyer,
  User,
} from '../models';
import {BuyerRepository} from '../repositories';

export class BuyerUserController {
  constructor(
    @repository(BuyerRepository) protected buyerRepository: BuyerRepository,
  ) { }

  @get('/buyers/{id}/user', {
    responses: {
      '200': {
        description: 'Buyer has one User',
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
    return this.buyerRepository.id_user_buyer(id).get(filter);
  }

  @post('/buyers/{id}/user', {
    responses: {
      '200': {
        description: 'Buyer model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Buyer.prototype.id_user_buyer,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUserInBuyer',
            exclude: ['id_user'],
            optional: ['id_user_buyer']
          }),
        },
      },
    }) user: Omit<User, 'id_user'>,
  ): Promise<User> {
    return this.buyerRepository.id_user_buyer(id).create(user);
  }

  @patch('/buyers/{id}/user', {
    responses: {
      '200': {
        description: 'Buyer.User PATCH success count',
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
    return this.buyerRepository.id_user_buyer(id).patch(user, where);
  }

  @del('/buyers/{id}/user', {
    responses: {
      '200': {
        description: 'Buyer.User DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.buyerRepository.id_user_buyer(id).delete(where);
  }
}
