import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  WishlistItem,
  Wishlist,
} from '../models';
import {WishlistItemRepository} from '../repositories';

export class WishlistItemWishlistController {
  constructor(
    @repository(WishlistItemRepository)
    public wishlistItemRepository: WishlistItemRepository,
  ) { }

  @get('/wishlist-items/{id}/wishlist', {
    responses: {
      '200': {
        description: 'Wishlist belonging to WishlistItem',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Wishlist)},
          },
        },
      },
    },
  })
  async getWishlist(
    @param.path.string('id') id: typeof WishlistItem.prototype.id_wishlist_item,
  ): Promise<Wishlist> {
    return this.wishlistItemRepository.Wishlist(id);
  }
}
