import {DefaultCrudRepository} from '@loopback/repository';
import {Auction, AuctionRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AuctionRepository extends DefaultCrudRepository<
  Auction,
  typeof Auction.prototype.id_auction,
  AuctionRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(Auction, dataSource);
  }
}
