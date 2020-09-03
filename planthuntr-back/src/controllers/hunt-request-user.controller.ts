import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  HuntRequest,
  User,
} from '../models';
import {HuntRequestRepository} from '../repositories';

export class HuntRequestUserController {
  constructor(
    @repository(HuntRequestRepository)
    public huntRequestRepository: HuntRequestRepository,
  ) { }

  @get('/hunt-requests/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to HuntRequest',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.string('id') id: typeof HuntRequest.prototype.id_hunt,
  ): Promise<User> {
    return this.huntRequestRepository.requester(id);
  }
}
