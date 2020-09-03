import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  StockItem,
  Stock,
} from '../models';
import {StockItemRepository} from '../repositories';

export class StockItemStockController {
  constructor(
    @repository(StockItemRepository)
    public stockItemRepository: StockItemRepository,
  ) { }

  @get('/stock-items/{id}/stock', {
    responses: {
      '200': {
        description: 'Stock belonging to StockItem',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Stock)},
          },
        },
      },
    },
  })
  async getStock(
    @param.path.string('id') id: typeof StockItem.prototype.id_stock_item,
  ): Promise<Stock> {
    return this.stockItemRepository.stock(id);
  }
}
