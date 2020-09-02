import {DefaultCrudRepository} from '@loopback/repository';
import {PaymentMethod, PaymentMethodRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PaymentMethodRepository extends DefaultCrudRepository<
  PaymentMethod,
  typeof PaymentMethod.prototype.id_payment_method,
  PaymentMethodRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(PaymentMethod, dataSource);
  }
}
