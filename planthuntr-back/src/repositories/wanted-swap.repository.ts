import {DefaultCrudRepository} from '@loopback/repository';
import {WantedSwap, WantedSwapRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WantedSwapRepository extends DefaultCrudRepository<
  WantedSwap,
  typeof WantedSwap.prototype.id_swap,
  WantedSwapRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(WantedSwap, dataSource);
  }
}
