import {DefaultCrudRepository} from '@loopback/repository';
import {HuntRequest, HuntRequestRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HuntRequestRepository extends DefaultCrudRepository<
  HuntRequest,
  typeof HuntRequest.prototype.id_hunt,
  HuntRequestRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(HuntRequest, dataSource);
  }
}
