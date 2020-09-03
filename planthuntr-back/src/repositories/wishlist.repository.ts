import {DefaultCrudRepository, repository, HasManyRepositoryFactory, BelongsToAccessor} from '@loopback/repository';
import {Wishlist, WishlistRelations, WishlistItem, User} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {WishlistItemRepository} from './wishlist-item.repository';
import {UserRepository} from './user.repository';

export class WishlistRepository extends DefaultCrudRepository<
  Wishlist,
  typeof Wishlist.prototype.id_wishlist,
  WishlistRelations
> {

  public readonly wishlistItems: HasManyRepositoryFactory<WishlistItem, typeof Wishlist.prototype.id_wishlist>;

  public readonly User: BelongsToAccessor<User, typeof Wishlist.prototype.id_wishlist>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('WishlistItemRepository') protected wishlistItemRepositoryGetter: Getter<WishlistItemRepository>, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Wishlist, dataSource);
    this.User = this.createBelongsToAccessorFor('User', userRepositoryGetter,);
    this.registerInclusionResolver('User', this.User.inclusionResolver);
    this.wishlistItems = this.createHasManyRepositoryFactoryFor('wishlistItems', wishlistItemRepositoryGetter,);
    this.registerInclusionResolver('wishlistItems', this.wishlistItems.inclusionResolver);}
}
