import {DefaultCrudRepository} from '@loopback/repository';
import {PlantDeal, PlantDealRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PlantDealRepository extends DefaultCrudRepository<
  PlantDeal,
  typeof PlantDeal.prototype.id_deal,
  PlantDealRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(PlantDeal, dataSource);
  }
}
