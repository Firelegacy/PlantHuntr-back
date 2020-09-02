import {DefaultCrudRepository} from '@loopback/repository';
import {Surname, SurnameRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SurnameRepository extends DefaultCrudRepository<
  Surname,
  typeof Surname.prototype.id_surname,
  SurnameRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(Surname, dataSource);
  }
}
