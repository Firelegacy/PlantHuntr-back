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
  User,
} from '../models';
import {BidRepository} from '../repositories';

export class BidUserController {
  constructor(
    @repository(BidRepository)
    public bidRepository: BidRepository,
  ) { }

  @get('/bids/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Bid',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.string('id') id: typeof Bid.prototype.id_bid,
  ): Promise<User> {
    return this.bidRepository.User(id);
  }
}
