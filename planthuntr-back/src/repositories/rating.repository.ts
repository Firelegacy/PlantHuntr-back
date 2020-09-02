import {DefaultCrudRepository} from '@loopback/repository';
import {Rating, RatingRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class RatingRepository extends DefaultCrudRepository<
  Rating,
  typeof Rating.prototype.id_rating,
  RatingRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(Rating, dataSource);
  }
}
