import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Bid,
  Auction,
} from '../models';
import {BidRepository} from '../repositories';

export class BidAuctionController {
  constructor(
    @repository(BidRepository)
    public bidRepository: BidRepository,
  ) { }

  @get('/bids/{id}/auction', {
    responses: {
      '200': {
        description: 'Auction belonging to Bid',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Auction)},
          },
        },
      },
    },
  })
  async getAuction(
    @param.path.string('id') id: typeof Bid.prototype.id_bid,
  ): Promise<Auction> {
    return this.bidRepository.Auction(id);
  }
}
