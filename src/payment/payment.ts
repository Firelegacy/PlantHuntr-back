import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentMethod } from './enums/PaymentMethod';

@Entity({ name: 'payment_method' })
export class Payment {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_payment_method' })
  id: string;

  @Column({
    type: 'enum',
    enum: PaymentMethod,
    name: 'payment_method',
  })
  paymentMethod: string;
}
