import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Stock, StockRelations, StockItem} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {StockItemRepository} from './stock-item.repository';

export class StockRepository extends DefaultCrudRepository<
  Stock,
  typeof Stock.prototype.id_stock,
  StockRelations
> {

  public readonly stockItems: HasManyRepositoryFactory<StockItem, typeof Stock.prototype.id_stock>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('StockItemRepository') protected stockItemRepositoryGetter: Getter<StockItemRepository>,
  ) {
    super(Stock, dataSource);
    this.stockItems = this.createHasManyRepositoryFactoryFor('stockItems', stockItemRepositoryGetter,);
    this.registerInclusionResolver('stockItems', this.stockItems.inclusionResolver);
  }
}
