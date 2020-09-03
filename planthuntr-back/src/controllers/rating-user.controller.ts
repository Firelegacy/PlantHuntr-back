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
  Rating,
  User,
} from '../models';
import {RatingRepository} from '../repositories';

export class RatingUserController {
  constructor(
    @repository(RatingRepository) protected ratingRepository: RatingRepository,
  ) { }

  @get('/ratings/{id}/user', {
    responses: {
      '200': {
        description: 'Rating has one User',
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
    return this.ratingRepository.id_user_buyer(id).get(filter);
  }

  @post('/ratings/{id}/user', {
    responses: {
      '200': {
        description: 'Rating model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Rating.prototype.id_rating,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUserInRating',
            exclude: ['id_user'],
            optional: ['id_user_buyer']
          }),
        },
      },
    }) user: Omit<User, 'id_user'>,
  ): Promise<User> {
    return this.ratingRepository.id_user_buyer(id).create(user);
  }

  @patch('/ratings/{id}/user', {
    responses: {
      '200': {
        description: 'Rating.User PATCH success count',
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
    return this.ratingRepository.id_user_buyer(id).patch(user, where);
  }

  @del('/ratings/{id}/user', {
    responses: {
      '200': {
        description: 'Rating.User DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.ratingRepository.id_user_buyer(id).delete(where);
  }
}
