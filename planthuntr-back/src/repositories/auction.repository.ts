import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {Auction, AuctionRelations, PlantDeal, Bid} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {PlantDealRepository} from './plant-deal.repository';
import {BidRepository} from './bid.repository';

export class AuctionRepository extends DefaultCrudRepository<
  Auction,
  typeof Auction.prototype.id_auction,
  AuctionRelations
> {

  public readonly PlantDeal: BelongsToAccessor<PlantDeal, typeof Auction.prototype.id_auction>;

  public readonly bids: HasManyRepositoryFactory<Bid, typeof Auction.prototype.id_auction>;

  public readonly acquirer: HasOneRepositoryFactory<Bid, typeof Auction.prototype.id_auction>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('PlantDealRepository') protected plantDealRepositoryGetter: Getter<PlantDealRepository>, @repository.getter('BidRepository') protected bidRepositoryGetter: Getter<BidRepository>,
  ) {
    super(Auction, dataSource);
    this.acquirer = this.createHasOneRepositoryFactoryFor('acquirer', bidRepositoryGetter);
    this.registerInclusionResolver('winning_bid', this.acquirer.inclusionResolver);
    this.bids = this.createHasManyRepositoryFactoryFor('bids', bidRepositoryGetter,);
    this.registerInclusionResolver('bids', this.bids.inclusionResolver);
    this.PlantDeal = this.createBelongsToAccessorFor('PlantDeal', plantDealRepositoryGetter,);
    this.registerInclusionResolver('PlantDeal', this.PlantDeal.inclusionResolver);
  }
}
