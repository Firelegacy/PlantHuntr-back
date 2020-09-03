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
  CollectionItem,
  Plant,
} from '../models';
import {CollectionItemRepository} from '../repositories';

export class CollectionItemPlantController {
  constructor(
    @repository(CollectionItemRepository) protected collectionItemRepository: CollectionItemRepository,
  ) { }

  @get('/collection-items/{id}/plant', {
    responses: {
      '200': {
        description: 'CollectionItem has one Plant',
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
    return this.collectionItemRepository.id_plant(id).get(filter);
  }

  @post('/collection-items/{id}/plant', {
    responses: {
      '200': {
        description: 'CollectionItem model instance',
        content: {'application/json': {schema: getModelSchemaRef(Plant)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof CollectionItem.prototype.id_collection_item,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plant, {
            title: 'NewPlantInCollectionItem',
            exclude: ['id_plant'],
            optional: ['id_plant']
          }),
        },
      },
    }) plant: Omit<Plant, 'id_plant'>,
  ): Promise<Plant> {
    return this.collectionItemRepository.id_plant(id).create(plant);
  }

  @patch('/collection-items/{id}/plant', {
    responses: {
      '200': {
        description: 'CollectionItem.Plant PATCH success count',
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
    return this.collectionItemRepository.id_plant(id).patch(plant, where);
  }

  @del('/collection-items/{id}/plant', {
    responses: {
      '200': {
        description: 'CollectionItem.Plant DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Plant)) where?: Where<Plant>,
  ): Promise<Count> {
    return this.collectionItemRepository.id_plant(id).delete(where);
  }
}
