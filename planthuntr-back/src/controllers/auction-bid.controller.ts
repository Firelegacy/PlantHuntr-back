import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Auction,
  Bid,
} from '../models';
import {AuctionRepository} from '../repositories';

export class AuctionBidController {
  constructor(
    @repository(AuctionRepository) protected auctionRepository: AuctionRepository,
  ) { }

  @get('/auctions/{id}/bid', {
    responses: {
      '200': {
        description: 'Auction has one Bid',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Bid),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Bid>,
  ): Promise<Bid> {
    return this.auctionRepository.acquirer(id).get(filter);
  }

  @post('/auctions/{id}/bid', {
    responses: {
      '200': {
        description: 'Auction model instance',
        content: {'application/json': {schema: getModelSchemaRef(Bid)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Auction.prototype.id_auction,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bid, {
            title: 'NewBidInAuction',
            exclude: ['id_bid'],
            optional: ['id_bid']
          }),
        },
      },
    }) bid: Omit<Bid, 'id_bid'>,
  ): Promise<Bid> {
    return this.auctionRepository.acquirer(id).create(bid);
  }

  @patch('/auctions/{id}/bid', {
    responses: {
      '200': {
        description: 'Auction.Bid PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bid, {partial: true}),
        },
      },
    })
    bid: Partial<Bid>,
    @param.query.object('where', getWhereSchemaFor(Bid)) where?: Where<Bid>,
  ): Promise<Count> {
    return this.auctionRepository.acquirer(id).patch(bid, where);
  }

  @del('/auctions/{id}/bid', {
    responses: {
      '200': {
        description: 'Auction.Bid DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Bid)) where?: Where<Bid>,
  ): Promise<Count> {
    return this.auctionRepository.acquirer(id).delete(where);
  }
}
