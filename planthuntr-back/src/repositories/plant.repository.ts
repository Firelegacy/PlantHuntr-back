import {DefaultCrudRepository} from '@loopback/repository';
import {Plant, PlantRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlantRepository extends DefaultCrudRepository<
  Plant,
  typeof Plant.prototype.id_plant,
  PlantRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(Plant, dataSource);
  }
}
