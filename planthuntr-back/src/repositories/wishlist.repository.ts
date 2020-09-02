import {DefaultCrudRepository} from '@loopback/repository';
import {Wishlist, WishlistRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WishlistRepository extends DefaultCrudRepository<
  Wishlist,
  typeof Wishlist.prototype.id_wishlist,
  WishlistRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(Wishlist, dataSource);
  }
}
