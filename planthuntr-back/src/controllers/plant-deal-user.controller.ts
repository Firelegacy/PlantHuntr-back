import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  PlantDeal,
  User,
} from '../models';
import {PlantDealRepository} from '../repositories';

export class PlantDealUserController {
  constructor(
    @repository(PlantDealRepository)
    public plantDealRepository: PlantDealRepository,
  ) { }

  @get('/plant-deals/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to PlantDeal',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.string('id') id: typeof PlantDeal.prototype.id_deal,
  ): Promise<User> {
    return this.plantDealRepository.user(id);
  }
}
