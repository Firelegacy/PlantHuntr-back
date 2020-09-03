import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {WishlistItem, WishlistItemRelations, Wishlist, Plant} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {WishlistRepository} from './wishlist.repository';
import {PlantRepository} from './plant.repository';

export class WishlistItemRepository extends DefaultCrudRepository<
  WishlistItem,
  typeof WishlistItem.prototype.id_wishlist_item,
  WishlistItemRelations
> {

  public readonly Wishlist: BelongsToAccessor<Wishlist, typeof WishlistItem.prototype.id_wishlist_item>;

  public readonly plant: HasOneRepositoryFactory<Plant, typeof WishlistItem.prototype.id_wishlist_item>;

  public readonly id_plant: HasOneRepositoryFactory<Plant, typeof WishlistItem.prototype.id_wishlist_item>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('WishlistRepository') protected wishlistRepositoryGetter: Getter<WishlistRepository>, @repository.getter('PlantRepository') protected plantRepositoryGetter: Getter<PlantRepository>,
  ) {
    super(WishlistItem, dataSource);
    this.id_plant = this.createHasOneRepositoryFactoryFor('id_plant', plantRepositoryGetter);
    this.registerInclusionResolver('id_plant', this.id_plant.inclusionResolver);
    this.plant = this.createHasOneRepositoryFactoryFor('plant', plantRepositoryGetter);
    this.registerInclusionResolver('plant', this.plant.inclusionResolver);
    this.Wishlist = this.createBelongsToAccessorFor('Wishlist', wishlistRepositoryGetter,);
    this.registerInclusionResolver('Wishlist', this.Wishlist.inclusionResolver);
  }
}
