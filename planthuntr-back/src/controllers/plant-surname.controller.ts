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
  Plant,
  Surname,
} from '../models';
import {PlantRepository} from '../repositories';

export class PlantSurnameController {
  constructor(
    @repository(PlantRepository) protected plantRepository: PlantRepository,
  ) { }

  @get('/plants/{id}/surnames', {
    responses: {
      '200': {
        description: 'Array of Plant has many Surname',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Surname)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Surname>,
  ): Promise<Surname[]> {
    return this.plantRepository.surnames(id).find(filter);
  }

  @post('/plants/{id}/surnames', {
    responses: {
      '200': {
        description: 'Plant model instance',
        content: {'application/json': {schema: getModelSchemaRef(Surname)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Plant.prototype.id_plant,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Surname, {
            title: 'NewSurnameInPlant',
            exclude: ['id_surname'],
            optional: ['id_plant']
          }),
        },
      },
    }) surname: Omit<Surname, 'id_surname'>,
  ): Promise<Surname> {
    return this.plantRepository.surnames(id).create(surname);
  }

  @patch('/plants/{id}/surnames', {
    responses: {
      '200': {
        description: 'Plant.Surname PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Surname, {partial: true}),
        },
      },
    })
    surname: Partial<Surname>,
    @param.query.object('where', getWhereSchemaFor(Surname)) where?: Where<Surname>,
  ): Promise<Count> {
    return this.plantRepository.surnames(id).patch(surname, where);
  }

  @del('/plants/{id}/surnames', {
    responses: {
      '200': {
        description: 'Plant.Surname DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Surname)) where?: Where<Surname>,
  ): Promise<Count> {
    return this.plantRepository.surnames(id).delete(where);
  }
}
