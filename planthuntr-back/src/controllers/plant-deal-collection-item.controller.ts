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
  PlantDeal,
  CollectionItem,
} from '../models';
import {PlantDealRepository} from '../repositories';

export class PlantDealCollectionItemController {
  constructor(
    @repository(PlantDealRepository) protected plantDealRepository: PlantDealRepository,
  ) { }

  @get('/plant-deals/{id}/collection-item', {
    responses: {
      '200': {
        description: 'PlantDeal has one CollectionItem',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CollectionItem),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<CollectionItem>,
  ): Promise<CollectionItem> {
    return this.plantDealRepository.id_collection_item(id).get(filter);
  }

  @post('/plant-deals/{id}/collection-item', {
    responses: {
      '200': {
        description: 'PlantDeal model instance',
        content: {'application/json': {schema: getModelSchemaRef(CollectionItem)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof PlantDeal.prototype.id_deal,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CollectionItem, {
            title: 'NewCollectionItemInPlantDeal',
            exclude: ['id_collection_item'],
            optional: ['id_collection_item']
          }),
        },
      },
    }) collectionItem: Omit<CollectionItem, 'id_collection_item'>,
  ): Promise<CollectionItem> {
    return this.plantDealRepository.id_collection_item(id).create(collectionItem);
  }

  @patch('/plant-deals/{id}/collection-item', {
    responses: {
      '200': {
        description: 'PlantDeal.CollectionItem PATCH success count',
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
    return this.plantDealRepository.id_collection_item(id).patch(collectionItem, where);
  }

  @del('/plant-deals/{id}/collection-item', {
    responses: {
      '200': {
        description: 'PlantDeal.CollectionItem DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(CollectionItem)) where?: Where<CollectionItem>,
  ): Promise<Count> {
    return this.plantDealRepository.id_collection_item(id).delete(where);
  }
}
