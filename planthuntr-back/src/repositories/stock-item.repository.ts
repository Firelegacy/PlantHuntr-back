import {DefaultCrudRepository} from '@loopback/repository';
import {StockItem, StockItemRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StockItemRepository extends DefaultCrudRepository<
  StockItem,
  typeof StockItem.prototype.id_stock_item,
  StockItemRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(StockItem, dataSource);
  }
}
