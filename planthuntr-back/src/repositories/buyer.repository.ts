import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Buyer, BuyerRelations, User, StockItem} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';
import {StockItemRepository} from './stock-item.repository';

export class BuyerRepository extends DefaultCrudRepository<
  Buyer,
  typeof Buyer.prototype.id_user_buyer,
  BuyerRelations
> {

  public readonly idid_user_buyer_user: HasOneRepositoryFactory<User, typeof Buyer.prototype.id_user_buyer>;

  public readonly id_stock_item: HasOneRepositoryFactory<StockItem, typeof Buyer.prototype.id_user_buyer>;

  public readonly id_user_buyer: HasOneRepositoryFactory<User, typeof Buyer.prototype.id_user_buyer>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('StockItemRepository') protected stockItemRepositoryGetter: Getter<StockItemRepository>,
  ) {
    super(Buyer, dataSource);
    this.id_stock_item = this.createHasOneRepositoryFactoryFor('id_stock_item', stockItemRepositoryGetter);
    this.registerInclusionResolver('id_stock_item', this.id_stock_item.inclusionResolver);
    this.id_user_buyer = this.createHasOneRepositoryFactoryFor('id_user', userRepositoryGetter);
    this.registerInclusionResolver('id_user', this.id_user_buyer.inclusionResolver);
  }
}
