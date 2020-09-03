import {DefaultCrudRepository, repository, HasOneRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {User, UserRelations, Wishlist, Collection, HuntRequest, PlantDeal} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {WishlistRepository} from './wishlist.repository';
import {CollectionRepository} from './collection.repository';
import {HuntRequestRepository} from './hunt-request.repository';
import {PlantDealRepository} from './plant-deal.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id_user,
  UserRelations
> {

  public readonly wishlist: HasOneRepositoryFactory<Wishlist, typeof User.prototype.id_user>;

  public readonly collection: HasOneRepositoryFactory<Collection, typeof User.prototype.id_user>;

  public readonly huntRequests: HasManyRepositoryFactory<HuntRequest, typeof User.prototype.id_user>;

  public readonly plantDeals: HasManyRepositoryFactory<PlantDeal, typeof User.prototype.id_user>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('WishlistRepository') protected wishlistRepositoryGetter: Getter<WishlistRepository>, @repository.getter('CollectionRepository') protected collectionRepositoryGetter: Getter<CollectionRepository>, @repository.getter('HuntRequestRepository') protected huntRequestRepositoryGetter: Getter<HuntRequestRepository>, @repository.getter('PlantDealRepository') protected plantDealRepositoryGetter: Getter<PlantDealRepository>,
  ) {
    super(User, dataSource);
    this.plantDeals = this.createHasManyRepositoryFactoryFor('plantDeals', plantDealRepositoryGetter,);
    this.registerInclusionResolver('plantDeals', this.plantDeals.inclusionResolver);
    this.huntRequests = this.createHasManyRepositoryFactoryFor('huntRequests', huntRequestRepositoryGetter,);
    this.registerInclusionResolver('huntRequests', this.huntRequests.inclusionResolver);
    this.collection = this.createHasOneRepositoryFactoryFor('collection', collectionRepositoryGetter);
    this.registerInclusionResolver('collection', this.collection.inclusionResolver);
    this.wishlist = this.createHasOneRepositoryFactoryFor('wishlist', wishlistRepositoryGetter);
    this.registerInclusionResolver('wishlist', this.wishlist.inclusionResolver);
  }
}
