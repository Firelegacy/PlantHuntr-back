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
  WantedSwap,
  PlantDeal,
} from '../models';
import {WantedSwapRepository} from '../repositories';

export class WantedSwapPlantDealController {
  constructor(
    @repository(WantedSwapRepository) protected wantedSwapRepository: WantedSwapRepository,
  ) { }

  @get('/wanted-swaps/{id}/plant-deal', {
    responses: {
      '200': {
        description: 'WantedSwap has one PlantDeal',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PlantDeal),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<PlantDeal>,
  ): Promise<PlantDeal> {
    return this.wantedSwapRepository.id_plant(id).get(filter);
  }

  @post('/wanted-swaps/{id}/plant-deal', {
    responses: {
      '200': {
        description: 'WantedSwap model instance',
        content: {'application/json': {schema: getModelSchemaRef(PlantDeal)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof WantedSwap.prototype.id_swap,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlantDeal, {
            title: 'NewPlantDealInWantedSwap',
            exclude: ['id_deal'],
            optional: ['id_plant']
          }),
        },
      },
    }) plantDeal: Omit<PlantDeal, 'id_deal'>,
  ): Promise<PlantDeal> {
    return this.wantedSwapRepository.id_plant(id).create(plantDeal);
  }

  @patch('/wanted-swaps/{id}/plant-deal', {
    responses: {
      '200': {
        description: 'WantedSwap.PlantDeal PATCH success count',
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
    return this.wantedSwapRepository.id_plant(id).patch(plantDeal, where);
  }

  @del('/wanted-swaps/{id}/plant-deal', {
    responses: {
      '200': {
        description: 'WantedSwap.PlantDeal DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(PlantDeal)) where?: Where<PlantDeal>,
  ): Promise<Count> {
    return this.wantedSwapRepository.id_plant(id).delete(where);
  }
}
