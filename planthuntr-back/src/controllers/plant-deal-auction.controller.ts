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
  Auction,
} from '../models';
import {PlantDealRepository} from '../repositories';

export class PlantDealAuctionController {
  constructor(
    @repository(PlantDealRepository) protected plantDealRepository: PlantDealRepository,
  ) { }

  @get('/plant-deals/{id}/auction', {
    responses: {
      '200': {
        description: 'PlantDeal has one Auction',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Auction),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Auction>,
  ): Promise<Auction> {
    return this.plantDealRepository.id_plant_deal(id).get(filter);
  }

  @post('/plant-deals/{id}/auction', {
    responses: {
      '200': {
        description: 'PlantDeal model instance',
        content: {'application/json': {schema: getModelSchemaRef(Auction)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof PlantDeal.prototype.id_deal,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Auction, {
            title: 'NewAuctionInPlantDeal',
            exclude: ['id_auction'],
            optional: ['id_plant_deal']
          }),
        },
      },
    }) auction: Omit<Auction, 'id_auction'>,
  ): Promise<Auction> {
    return this.plantDealRepository.id_plant_deal(id).create(auction);
  }

  @patch('/plant-deals/{id}/auction', {
    responses: {
      '200': {
        description: 'PlantDeal.Auction PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Auction, {partial: true}),
        },
      },
    })
    auction: Partial<Auction>,
    @param.query.object('where', getWhereSchemaFor(Auction)) where?: Where<Auction>,
  ): Promise<Count> {
    return this.plantDealRepository.id_plant_deal(id).patch(auction, where);
  }

  @del('/plant-deals/{id}/auction', {
    responses: {
      '200': {
        description: 'PlantDeal.Auction DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Auction)) where?: Where<Auction>,
  ): Promise<Count> {
    return this.plantDealRepository.id_plant_deal(id).delete(where);
  }
}
