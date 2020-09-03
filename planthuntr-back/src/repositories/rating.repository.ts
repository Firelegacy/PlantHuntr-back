import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Rating, RatingRelations, User} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';

export class RatingRepository extends DefaultCrudRepository<
  Rating,
  typeof Rating.prototype.id_rating,
  RatingRelations
> {

  public readonly id_user_seller: HasOneRepositoryFactory<User, typeof Rating.prototype.id_rating>;

  public readonly id_user_buyer: HasOneRepositoryFactory<User, typeof Rating.prototype.id_rating>;

  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Rating, dataSource);
    this.id_user_buyer = this.createHasOneRepositoryFactoryFor('id_user_buyer', userRepositoryGetter);
    this.registerInclusionResolver('id_user_buyer', this.id_user_buyer.inclusionResolver);
    this.id_user_seller = this.createHasOneRepositoryFactoryFor('id_user_seller', userRepositoryGetter);
    this.registerInclusionResolver('id_user_seller', this.id_user_seller.inclusionResolver);
  }
}
