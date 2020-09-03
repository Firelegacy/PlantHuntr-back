import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {Collection, CollectionRelations, User, CollectionItem} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';
import {CollectionItemRepository} from './collection-item.repository';

export class CollectionRepository extends DefaultCrudRepository<
  Collection,
  typeof Collection.prototype.id_collection,
  CollectionRelations
> {

  public readonly owner: BelongsToAccessor<User, typeof Collection.prototype.id_collection>;

  public readonly id_collection: HasManyRepositoryFactory<CollectionItem, typeof Collection.prototype.id_collection>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>, @repository.getter('CollectionItemRepository') protected collectionItemRepositoryGetter: Getter<CollectionItemRepository>,
  ) {
    super(Collection, dataSource);
    this.id_collection = this.createHasManyRepositoryFactoryFor('id_collection', collectionItemRepositoryGetter,);
    this.registerInclusionResolver('id_collection', this.id_collection.inclusionResolver);
    this.owner = this.createBelongsToAccessorFor('owner', userRepositoryGetter,);
    this.registerInclusionResolver('owner', this.owner.inclusionResolver);
  }
}
