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
  Collection,
  CollectionItem,
} from '../models';
import {CollectionRepository} from '../repositories';

export class CollectionCollectionItemController {
  constructor(
    @repository(CollectionRepository) protected collectionRepository: CollectionRepository,
  ) { }

  @get('/collections/{id}/collection-items', {
    responses: {
      '200': {
        description: 'Array of Collection has many CollectionItem',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(CollectionItem)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<CollectionItem>,
  ): Promise<CollectionItem[]> {
    return this.collectionRepository.id_collection(id).find(filter);
  }

  @post('/collections/{id}/collection-items', {
    responses: {
      '200': {
        description: 'Collection model instance',
        content: {'application/json': {schema: getModelSchemaRef(CollectionItem)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Collection.prototype.id_collection,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CollectionItem, {
            title: 'NewCollectionItemInCollection',
            exclude: ['id_collection_item'],
            optional: ['id_collection']
          }),
        },
      },
    }) collectionItem: Omit<CollectionItem, 'id_collection_item'>,
  ): Promise<CollectionItem> {
    return this.collectionRepository.id_collection(id).create(collectionItem);
  }

  @patch('/collections/{id}/collection-items', {
    responses: {
      '200': {
        description: 'Collection.CollectionItem PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CollectionItem, {partial: true}),
        },
      },
    })
    collectionItem: Partial<CollectionItem>,
    @param.query.object('where', getWhereSchemaFor(CollectionItem)) where?: Where<CollectionItem>,
  ): Promise<Count> {
    return this.collectionRepository.id_collection(id).patch(collectionItem, where);
  }

  @del('/collections/{id}/collection-items', {
    responses: {
      '200': {
        description: 'Collection.CollectionItem DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(CollectionItem)) where?: Where<CollectionItem>,
  ): Promise<Count> {
    return this.collectionRepository.id_collection(id).delete(where);
  }
}
