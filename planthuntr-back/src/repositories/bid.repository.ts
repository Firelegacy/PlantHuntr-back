import {DefaultCrudRepository} from '@loopback/repository';
import {Bid, BidRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BidRepository extends DefaultCrudRepository<
  Bid,
  typeof Bid.prototype.id_bid,
  BidRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(Bid, dataSource);
  }
}
