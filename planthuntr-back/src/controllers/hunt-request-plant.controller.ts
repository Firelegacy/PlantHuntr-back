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
  HuntRequest,
  Plant,
} from '../models';
import {HuntRequestRepository} from '../repositories';

export class HuntRequestPlantController {
  constructor(
    @repository(HuntRequestRepository) protected huntRequestRepository: HuntRequestRepository,
  ) { }

  @get('/hunt-requests/{id}/plant', {
    responses: {
      '200': {
        description: 'HuntRequest has one Plant',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Plant),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Plant>,
  ): Promise<Plant> {
    return this.huntRequestRepository.id_plant(id).get(filter);
  }

  @post('/hunt-requests/{id}/plant', {
    responses: {
      '200': {
        description: 'HuntRequest model instance',
        content: {'application/json': {schema: getModelSchemaRef(Plant)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof HuntRequest.prototype.id_hunt,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plant, {
            title: 'NewPlantInHuntRequest',
            exclude: ['id_plant'],
            optional: ['id_plant']
          }),
        },
      },
    }) plant: Omit<Plant, 'id_plant'>,
  ): Promise<Plant> {
    return this.huntRequestRepository.id_plant(id).create(plant);
  }

  @patch('/hunt-requests/{id}/plant', {
    responses: {
      '200': {
        description: 'HuntRequest.Plant PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plant, {partial: true}),
        },
      },
    })
    plant: Partial<Plant>,
    @param.query.object('where', getWhereSchemaFor(Plant)) where?: Where<Plant>,
  ): Promise<Count> {
    return this.huntRequestRepository.id_plant(id).patch(plant, where);
  }

  @del('/hunt-requests/{id}/plant', {
    responses: {
      '200': {
        description: 'HuntRequest.Plant DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Plant)) where?: Where<Plant>,
  ): Promise<Count> {
    return this.huntRequestRepository.id_plant(id).delete(where);
  }
}
