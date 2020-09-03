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
  Wishlist,
  WishlistItem,
} from '../models';
import {WishlistRepository} from '../repositories';

export class WishlistWishlistItemController {
  constructor(
    @repository(WishlistRepository) protected wishlistRepository: WishlistRepository,
  ) { }

  @get('/wishlists/{id}/wishlist-items', {
    responses: {
      '200': {
        description: 'Array of Wishlist has many WishlistItem',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(WishlistItem)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<WishlistItem>,
  ): Promise<WishlistItem[]> {
    return this.wishlistRepository.wishlistItems(id).find(filter);
  }

  @post('/wishlists/{id}/wishlist-items', {
    responses: {
      '200': {
        description: 'Wishlist model instance',
        content: {'application/json': {schema: getModelSchemaRef(WishlistItem)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Wishlist.prototype.id_wishlist,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WishlistItem, {
            title: 'NewWishlistItemInWishlist',
            exclude: ['id_wishlist_item'],
            optional: ['id_wishlist']
          }),
        },
      },
    }) wishlistItem: Omit<WishlistItem, 'id_wishlist_item'>,
  ): Promise<WishlistItem> {
    return this.wishlistRepository.wishlistItems(id).create(wishlistItem);
  }

  @patch('/wishlists/{id}/wishlist-items', {
    responses: {
      '200': {
        description: 'Wishlist.WishlistItem PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(WishlistItem, {partial: true}),
        },
      },
    })
    wishlistItem: Partial<WishlistItem>,
    @param.query.object('where', getWhereSchemaFor(WishlistItem)) where?: Where<WishlistItem>,
  ): Promise<Count> {
    return this.wishlistRepository.wishlistItems(id).patch(wishlistItem, where);
  }

  @del('/wishlists/{id}/wishlist-items', {
    responses: {
      '200': {
        description: 'Wishlist.WishlistItem DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(WishlistItem)) where?: Where<WishlistItem>,
  ): Promise<Count> {
    return this.wishlistRepository.wishlistItems(id).delete(where);
  }
}
