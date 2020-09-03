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
  StockItem,
} from '../models';
import {BuyerRepository} from '../repositories';

export class BuyerStockItemController {
  constructor(
    @repository(BuyerRepository) protected buyerRepository: BuyerRepository,
  ) { }

  @get('/buyers/{id}/stock-item', {
    responses: {
      '200': {
        description: 'Buyer has one StockItem',
        content: {
          'application/json': {
            schema: getModelSchemaRef(StockItem),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<StockItem>,
  ): Promise<StockItem> {
    return this.buyerRepository.id_stock_item(id).get(filter);
  }

  @post('/buyers/{id}/stock-item', {
    responses: {
      '200': {
        description: 'Buyer model instance',
        content: {'application/json': {schema: getModelSchemaRef(StockItem)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Buyer.prototype.id_user_buyer,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StockItem, {
            title: 'NewStockItemInBuyer',
            exclude: ['id_stock_item'],
            optional: ['id_stock_item']
          }),
        },
      },
    }) stockItem: Omit<StockItem, 'id_stock_item'>,
  ): Promise<StockItem> {
    return this.buyerRepository.id_stock_item(id).create(stockItem);
  }

  @patch('/buyers/{id}/stock-item', {
    responses: {
      '200': {
        description: 'Buyer.StockItem PATCH success count',
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
    return this.buyerRepository.id_stock_item(id).patch(stockItem, where);
  }

  @del('/buyers/{id}/stock-item', {
    responses: {
      '200': {
        description: 'Buyer.StockItem DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(StockItem)) where?: Where<StockItem>,
  ): Promise<Count> {
    return this.buyerRepository.id_stock_item(id).delete(where);
  }
}
