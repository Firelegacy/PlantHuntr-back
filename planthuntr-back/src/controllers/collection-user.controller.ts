import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Collection,
  User,
} from '../models';
import {CollectionRepository} from '../repositories';

export class CollectionUserController {
  constructor(
    @repository(CollectionRepository)
    public collectionRepository: CollectionRepository,
  ) { }

  @get('/collections/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Collection',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.string('id') id: typeof Collection.prototype.id_collection,
  ): Promise<User> {
    return this.collectionRepository.owner(id);
  }
}
