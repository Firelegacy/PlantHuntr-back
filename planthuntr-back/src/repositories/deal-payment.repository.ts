import {DefaultCrudRepository} from '@loopback/repository';
import {DealPayment, DealPaymentRelations} from '../models';
import {PlanthuntrDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DealPaymentRepository extends DefaultCrudRepository<
  DealPayment,
  typeof DealPayment.prototype.id_deal_payment,
  DealPaymentRelations
> {
  constructor(
    @inject('datasources.planthuntr') dataSource: PlanthuntrDataSource,
  ) {
    super(DealPayment, dataSource);
  }
}
