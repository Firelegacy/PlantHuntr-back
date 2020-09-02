import {DefaultCrudRepository} from '@loopback/repository';
import {Stock, StockRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StockRepository extends DefaultCrudRepository<
  Stock,
  typeof Stock.prototype.id_stock,
  StockRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(Stock, dataSource);
  }
}
