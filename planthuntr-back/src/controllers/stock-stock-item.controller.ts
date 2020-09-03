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
  Stock,
  StockItem,
} from '../models';
import {StockRepository} from '../repositories';

export class StockStockItemController {
  constructor(
    @repository(StockRepository) protected stockRepository: StockRepository,
  ) { }

  @get('/stocks/{id}/stock-items', {
    responses: {
      '200': {
        description: 'Array of Stock has many StockItem',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(StockItem)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<StockItem>,
  ): Promise<StockItem[]> {
    return this.stockRepository.stockItems(id).find(filter);
  }

  @post('/stocks/{id}/stock-items', {
    responses: {
      '200': {
        description: 'Stock model instance',
        content: {'application/json': {schema: getModelSchemaRef(StockItem)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Stock.prototype.id_stock,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StockItem, {
            title: 'NewStockItemInStock',
            exclude: ['id_stock_item'],
            optional: ['id_stock']
          }),
        },
      },
    }) stockItem: Omit<StockItem, 'id_stock_item'>,
  ): Promise<StockItem> {
    return this.stockRepository.stockItems(id).create(stockItem);
  }

  @patch('/stocks/{id}/stock-items', {
    responses: {
      '200': {
        description: 'Stock.StockItem PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StockItem, {partial: true}),
        },
      },
    })
    stockItem: Partial<StockItem>,
    @param.query.object('where', getWhereSchemaFor(StockItem)) where?: Where<StockItem>,
  ): Promise<Count> {
    return this.stockRepository.stockItems(id).patch(stockItem, where);
  }

  @del('/stocks/{id}/stock-items', {
    responses: {
      '200': {
        description: 'Stock.StockItem DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(StockItem)) where?: Where<StockItem>,
  ): Promise<Count> {
    return this.stockRepository.stockItems(id).delete(where);
  }
}
