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
  PlantDeal,
} from '../models';
import {UserRepository} from '../repositories';

export class UserPlantDealController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/plant-deals', {
    responses: {
      '200': {
        description: 'Array of User has many PlantDeal',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(PlantDeal)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<PlantDeal>,
  ): Promise<PlantDeal[]> {
    return this.userRepository.plantDeals(id).find(filter);
  }

  @post('/users/{id}/plant-deals', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(PlantDeal)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id_user,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlantDeal, {
            title: 'NewPlantDealInUser',
            exclude: ['id_deal'],
            optional: ['id_user']
          }),
        },
      },
    }) plantDeal: Omit<PlantDeal, 'id_deal'>,
  ): Promise<PlantDeal> {
    return this.userRepository.plantDeals(id).create(plantDeal);
  }

  @patch('/users/{id}/plant-deals', {
    responses: {
      '200': {
        description: 'User.PlantDeal PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlantDeal, {partial: true}),
        },
      },
    })
    plantDeal: Partial<PlantDeal>,
    @param.query.object('where', getWhereSchemaFor(PlantDeal)) where?: Where<PlantDeal>,
  ): Promise<Count> {
    return this.userRepository.plantDeals(id).patch(plantDeal, where);
  }

  @del('/users/{id}/plant-deals', {
    responses: {
      '200': {
        description: 'User.PlantDeal DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(PlantDeal)) where?: Where<PlantDeal>,
  ): Promise<Count> {
    return this.userRepository.plantDeals(id).delete(where);
  }
}
