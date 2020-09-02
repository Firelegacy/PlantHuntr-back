import {DefaultCrudRepository} from '@loopback/repository';
import {Seller, SellerRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SellerRepository extends DefaultCrudRepository<
  Seller,
  typeof Seller.prototype.id_user_seller,
  SellerRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(Seller, dataSource);
  }
}
