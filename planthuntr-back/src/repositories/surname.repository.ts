import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {Surname, SurnameRelations, Plant} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {PlantRepository} from './plant.repository';

export class SurnameRepository extends DefaultCrudRepository<
  Surname,
  typeof Surname.prototype.id_surname,
  SurnameRelations
> {

  public readonly Plant: BelongsToAccessor<Plant, typeof Surname.prototype.id_surname>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('PlantRepository') protected plantRepositoryGetter: Getter<PlantRepository>,
  ) {
    super(Surname, dataSource);
    this.Plant = this.createBelongsToAccessorFor('Plant', plantRepositoryGetter,);
  }
}
