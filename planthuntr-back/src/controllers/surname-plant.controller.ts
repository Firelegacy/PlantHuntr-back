import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Surname,
  Plant,
} from '../models';
import {SurnameRepository} from '../repositories';

export class SurnamePlantController {
  constructor(
    @repository(SurnameRepository)
    public surnameRepository: SurnameRepository,
  ) { }

  @get('/surnames/{id}/plant', {
    responses: {
      '200': {
        description: 'Plant belonging to Surname',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Plant)},
          },
        },
      },
    },
  })
  async getPlant(
    @param.path.string('id') id: typeof Surname.prototype.id_surname,
  ): Promise<Plant> {
    return this.surnameRepository.Plant(id);
  }
}
