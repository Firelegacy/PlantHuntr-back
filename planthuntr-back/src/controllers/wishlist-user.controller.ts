import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Wishlist,
  User,
} from '../models';
import {WishlistRepository} from '../repositories';

export class WishlistUserController {
  constructor(
    @repository(WishlistRepository)
    public wishlistRepository: WishlistRepository,
  ) { }

  @get('/wishlists/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Wishlist',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.string('id') id: typeof Wishlist.prototype.id_wishlist,
  ): Promise<User> {
    return this.wishlistRepository.User(id);
  }
}
