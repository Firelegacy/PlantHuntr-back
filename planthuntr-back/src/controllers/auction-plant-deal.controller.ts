import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Auction,
  PlantDeal,
} from '../models';
import {AuctionRepository} from '../repositories';

export class AuctionPlantDealController {
  constructor(
    @repository(AuctionRepository)
    public auctionRepository: AuctionRepository,
  ) { }

  @get('/auctions/{id}/plant-deal', {
    responses: {
      '200': {
        description: 'PlantDeal belonging to Auction',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(PlantDeal)},
          },
        },
      },
    },
  })
  async getPlantDeal(
    @param.path.string('id') id: typeof Auction.prototype.id_auction,
  ): Promise<PlantDeal> {
    return this.auctionRepository.PlantDeal(id);
  }
}
