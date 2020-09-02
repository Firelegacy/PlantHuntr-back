import {DefaultCrudRepository} from '@loopback/repository';
import {CollectionItem, CollectionItemRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CollectionItemRepository extends DefaultCrudRepository<
  CollectionItem,
  typeof CollectionItem.prototype.id_collection_item,
  CollectionItemRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(CollectionItem, dataSource);
  }
}
