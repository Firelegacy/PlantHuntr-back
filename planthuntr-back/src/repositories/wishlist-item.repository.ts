import {DefaultCrudRepository} from '@loopback/repository';
import {WishlistItem, WishlistItemRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WishlistItemRepository extends DefaultCrudRepository<
  WishlistItem,
  typeof WishlistItem.prototype.id_wishlist_item,
  WishlistItemRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(WishlistItem, dataSource);
  }
}
