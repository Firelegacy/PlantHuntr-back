import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {Plant, PlantRelations, Surname} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {SurnameRepository} from './surname.repository';

export class PlantRepository extends DefaultCrudRepository<
  Plant,
  typeof Plant.prototype.id_plant,
  PlantRelations
> {

  public readonly surnames: HasManyRepositoryFactory<Surname, typeof Plant.prototype.id_plant>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('SurnameRepository') protected surnameRepositoryGetter: Getter<SurnameRepository>,
  ) {
    super(Plant, dataSource);
    this.surnames = this.createHasManyRepositoryFactoryFor('surnames', surnameRepositoryGetter,);
    this.registerInclusionResolver('surnames', this.surnames.inclusionResolver);
  }
}
