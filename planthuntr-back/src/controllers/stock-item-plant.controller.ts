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
  StockItem,
  Plant,
} from '../models';
import {StockItemRepository} from '../repositories';

export class StockItemPlantController {
  constructor(
    @repository(StockItemRepository) protected stockItemRepository: StockItemRepository,
  ) { }

  @get('/stock-items/{id}/plant', {
    responses: {
      '200': {
        description: 'StockItem has one Plant',
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
    return this.stockItemRepository.id_plant(id).get(filter);
  }

  @post('/stock-items/{id}/plant', {
    responses: {
      '200': {
        description: 'StockItem model instance',
        content: {'application/json': {schema: getModelSchemaRef(Plant)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof StockItem.prototype.id_stock_item,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plant, {
            title: 'NewPlantInStockItem',
            exclude: ['id_plant'],
            optional: ['id_plant']
          }),
        },
      },
    }) plant: Omit<Plant, 'id_plant'>,
  ): Promise<Plant> {
    return this.stockItemRepository.id_plant(id).create(plant);
  }

  @patch('/stock-items/{id}/plant', {
    responses: {
      '200': {
        description: 'StockItem.Plant PATCH success count',
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
    return this.stockItemRepository.id_plant(id).patch(plant, where);
  }

  @del('/stock-items/{id}/plant', {
    responses: {
      '200': {
        description: 'StockItem.Plant DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Plant)) where?: Where<Plant>,
  ): Promise<Count> {
    return this.stockItemRepository.id_plant(id).delete(where);
  }
}
