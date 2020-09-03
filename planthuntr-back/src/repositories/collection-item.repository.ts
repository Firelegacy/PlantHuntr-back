import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {CollectionItem, CollectionItemRelations, Collection, Plant} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {CollectionRepository} from './collection.repository';
import {PlantRepository} from './plant.repository';

export class CollectionItemRepository extends DefaultCrudRepository<
  CollectionItem,
  typeof CollectionItem.prototype.id_collection_item,
  CollectionItemRelations
> {

  public readonly collection: BelongsToAccessor<Collection, typeof CollectionItem.prototype.id_collection_item>;

  public readonly id_plant: HasOneRepositoryFactory<Plant, typeof CollectionItem.prototype.id_collection_item>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('CollectionRepository') protected collectionRepositoryGetter: Getter<CollectionRepository>, @repository.getter('PlantRepository') protected plantRepositoryGetter: Getter<PlantRepository>,
  ) {
    super(CollectionItem, dataSource);
    this.id_plant = this.createHasOneRepositoryFactoryFor('id_plant', plantRepositoryGetter);
    this.registerInclusionResolver('id_plant', this.id_plant.inclusionResolver);
    this.collection = this.createBelongsToAccessorFor('collection', collectionRepositoryGetter,);
    this.registerInclusionResolver('collection', this.collection.inclusionResolver);
  }
}
