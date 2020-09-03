import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  CollectionItem,
  Collection,
} from '../models';
import {CollectionItemRepository} from '../repositories';

export class CollectionItemCollectionController {
  constructor(
    @repository(CollectionItemRepository)
    public collectionItemRepository: CollectionItemRepository,
  ) { }

  @get('/collection-items/{id}/collection', {
    responses: {
      '200': {
        description: 'Collection belonging to CollectionItem',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Collection)},
          },
        },
      },
    },
  })
  async getCollection(
    @param.path.string('id') id: typeof CollectionItem.prototype.id_collection_item,
  ): Promise<Collection> {
    return this.collectionItemRepository.collection(id);
  }
}
