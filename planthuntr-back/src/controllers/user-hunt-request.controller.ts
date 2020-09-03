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
  HuntRequest,
} from '../models';
import {UserRepository} from '../repositories';

export class UserHuntRequestController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/hunt-requests', {
    responses: {
      '200': {
        description: 'Array of User has many HuntRequest',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(HuntRequest)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<HuntRequest>,
  ): Promise<HuntRequest[]> {
    return this.userRepository.huntRequests(id).find(filter);
  }

  @post('/users/{id}/hunt-requests', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(HuntRequest)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id_user,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HuntRequest, {
            title: 'NewHuntRequestInUser',
            exclude: ['id_hunt'],
            optional: ['id_user']
          }),
        },
      },
    }) huntRequest: Omit<HuntRequest, 'id_hunt'>,
  ): Promise<HuntRequest> {
    return this.userRepository.huntRequests(id).create(huntRequest);
  }

  @patch('/users/{id}/hunt-requests', {
    responses: {
      '200': {
        description: 'User.HuntRequest PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HuntRequest, {partial: true}),
        },
      },
    })
    huntRequest: Partial<HuntRequest>,
    @param.query.object('where', getWhereSchemaFor(HuntRequest)) where?: Where<HuntRequest>,
  ): Promise<Count> {
    return this.userRepository.huntRequests(id).patch(huntRequest, where);
  }

  @del('/users/{id}/hunt-requests', {
    responses: {
      '200': {
        description: 'User.HuntRequest DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(HuntRequest)) where?: Where<HuntRequest>,
  ): Promise<Count> {
    return this.userRepository.huntRequests(id).delete(where);
  }
}
