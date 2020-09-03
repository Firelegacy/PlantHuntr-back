import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Seller, SellerRelations, User} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';

export class SellerRepository extends DefaultCrudRepository<
  Seller,
  typeof Seller.prototype.id_user_seller,
  SellerRelations
> {

  public readonly id_user: HasOneRepositoryFactory<User, typeof Seller.prototype.id_user_seller>;

  public readonly id_user_seller: HasOneRepositoryFactory<User, typeof Seller.prototype.id_user_seller>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Seller, dataSource);
    this.id_user_seller = this.createHasOneRepositoryFactoryFor('id_user_seller', userRepositoryGetter);
    this.registerInclusionResolver('id_user_seller', this.id_user_seller.inclusionResolver);
    this.id_user = this.createHasOneRepositoryFactoryFor('id_user', userRepositoryGetter);
    this.registerInclusionResolver('id_user', this.id_user.inclusionResolver);
  }
}
