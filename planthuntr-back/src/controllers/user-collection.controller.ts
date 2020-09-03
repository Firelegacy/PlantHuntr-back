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
  Collection,
} from '../models';
import {UserRepository} from '../repositories';

export class UserCollectionController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/collection', {
    responses: {
      '200': {
        description: 'User has one Collection',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Collection),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Collection>,
  ): Promise<Collection> {
    return this.userRepository.collection(id).get(filter);
  }

  @post('/users/{id}/collection', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Collection)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id_user,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Collection, {
            title: 'NewCollectionInUser',
            exclude: ['id_collection'],
            optional: ['id_user']
          }),
        },
      },
    }) collection: Omit<Collection, 'id_collection'>,
  ): Promise<Collection> {
    return this.userRepository.collection(id).create(collection);
  }

  @patch('/users/{id}/collection', {
    responses: {
      '200': {
        description: 'User.Collection PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Collection, {partial: true}),
        },
      },
    })
    collection: Partial<Collection>,
    @param.query.object('where', getWhereSchemaFor(Collection)) where?: Where<Collection>,
  ): Promise<Count> {
    return this.userRepository.collection(id).patch(collection, where);
  }

  @del('/users/{id}/collection', {
    responses: {
      '200': {
        description: 'User.Collection DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Collection)) where?: Where<Collection>,
  ): Promise<Count> {
    return this.userRepository.collection(id).delete(where);
  }
}
