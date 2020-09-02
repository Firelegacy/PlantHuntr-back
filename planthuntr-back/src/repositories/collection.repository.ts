import {DefaultCrudRepository} from '@loopback/repository';
import {Collection, CollectionRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CollectionRepository extends DefaultCrudRepository<
  Collection,
  typeof Collection.prototype.id_collection,
  CollectionRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(Collection, dataSource);
  }
}
