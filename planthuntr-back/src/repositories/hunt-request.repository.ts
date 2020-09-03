import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {HuntRequest, HuntRequestRelations, User, Plant} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';
import {PlantRepository} from './plant.repository';

export class HuntRequestRepository extends DefaultCrudRepository<
  HuntRequest,
  typeof HuntRequest.prototype.id_hunt,
  HuntRequestRelations
> {

  public readonly requester: BelongsToAccessor<User, typeof HuntRequest.prototype.id_hunt>;

  public readonly id_plant: HasOneRepositoryFactory<Plant, typeof HuntRequest.prototype.id_hunt>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('PlantRepository') protected plantRepositoryGetter: Getter<PlantRepository>,
  ) {
    super(HuntRequest, dataSource);
    this.id_plant = this.createHasOneRepositoryFactoryFor('id_plant', plantRepositoryGetter);
    this.registerInclusionResolver('id_plant', this.id_plant.inclusionResolver);
    this.requester = this.createBelongsToAccessorFor('requester', userRepositoryGetter,);
  }
}
