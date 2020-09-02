import {DefaultCrudRepository} from '@loopback/repository';
import {Buyer, BuyerRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BuyerRepository extends DefaultCrudRepository<
  Buyer,
  typeof Buyer.prototype.id_user_buyer,
  BuyerRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(Buyer, dataSource);
  }
}
