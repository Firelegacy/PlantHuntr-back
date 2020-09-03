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
  WishlistItem,
  Plant,
} from '../models';
import {WishlistItemRepository} from '../repositories';

export class WishlistItemPlantController {
  constructor(
    @repository(WishlistItemRepository) protected wishlistItemRepository: WishlistItemRepository,
  ) { }

  @get('/wishlist-items/{id}/plant', {
    responses: {
      '200': {
        description: 'WishlistItem has one Plant',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Plant),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Plant>,
  ): Promise<Plant> {
    return this.wishlistItemRepository.id_plant(id).get(filter);
  }

  @post('/wishlist-items/{id}/plant', {
    responses: {
      '200': {
        description: 'WishlistItem model instance',
        content: {'application/json': {schema: getModelSchemaRef(Plant)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof WishlistItem.prototype.id_wishlist_item,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plant, {
            title: 'NewPlantInWishlistItem',
            exclude: ['id_plant'],
            optional: ['id_plant']
          }),
        },
      },
    }) plant: Omit<Plant, 'id_plant'>,
  ): Promise<Plant> {
    return this.wishlistItemRepository.id_plant(id).create(plant);
  }

  @patch('/wishlist-items/{id}/plant', {
    responses: {
      '200': {
        description: 'WishlistItem.Plant PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plant, {partial: true}),
        },
      },
    })
    plant: Partial<Plant>,
    @param.query.object('where', getWhereSchemaFor(Plant)) where?: Where<Plant>,
  ): Promise<Count> {
    return this.wishlistItemRepository.id_plant(id).patch(plant, where);
  }

  @del('/wishlist-items/{id}/plant', {
    responses: {
      '200': {
        description: 'WishlistItem.Plant DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Plant)) where?: Where<Plant>,
  ): Promise<Count> {
    return this.wishlistItemRepository.id_plant(id).delete(where);
  }
}
