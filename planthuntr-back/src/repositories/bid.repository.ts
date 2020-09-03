import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Bid, BidRelations, Auction, User} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {AuctionRepository} from './auction.repository';
import {UserRepository} from './user.repository';

export class BidRepository extends DefaultCrudRepository<
  Bid,
  typeof Bid.prototype.id_bid,
  BidRelations
> {

  public readonly Auction: BelongsToAccessor<Auction, typeof Bid.prototype.id_bid>;

  public readonly User: BelongsToAccessor<User, typeof Bid.prototype.id_bid>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('AuctionRepository') protected auctionRepositoryGetter: Getter<AuctionRepository>, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Bid, dataSource);
    this.User = this.createBelongsToAccessorFor('User', userRepositoryGetter,);
    this.registerInclusionResolver('User', this.User.inclusionResolver);
    this.Auction = this.createBelongsToAccessorFor('Auction', auctionRepositoryGetter,);
    this.registerInclusionResolver('Auction', this.Auction.inclusionResolver);
  }
}
