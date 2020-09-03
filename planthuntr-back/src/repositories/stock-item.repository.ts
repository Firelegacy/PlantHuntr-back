import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {StockItem, StockItemRelations, Stock, Plant} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {StockRepository} from './stock.repository';
import {PlantRepository} from './plant.repository';

export class StockItemRepository extends DefaultCrudRepository<
  StockItem,
  typeof StockItem.prototype.id_stock_item,
  StockItemRelations
> {

  public readonly stock: BelongsToAccessor<Stock, typeof StockItem.prototype.id_stock_item>;

  public readonly id_plant: HasOneRepositoryFactory<Plant, typeof StockItem.prototype.id_stock_item>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('StockRepository') protected stockRepositoryGetter: Getter<StockRepository>, @repository.getter('PlantRepository') protected plantRepositoryGetter: Getter<PlantRepository>,
  ) {
    super(StockItem, dataSource);
    this.id_plant = this.createHasOneRepositoryFactoryFor('id_plant', plantRepositoryGetter);
    this.registerInclusionResolver('id_plant', this.id_plant.inclusionResolver);
    this.stock = this.createBelongsToAccessorFor('stock', stockRepositoryGetter,);
    this.registerInclusionResolver('stock', this.stock.inclusionResolver);
  }
}
