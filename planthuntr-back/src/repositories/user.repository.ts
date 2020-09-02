import {DefaultCrudRepository} from '@loopback/repository';
import {User, UserRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id_user,
  UserRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(User, dataSource);
  }
}
