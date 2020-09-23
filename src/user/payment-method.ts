import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { PaymentMethodName } from '../enum/PaymentMethodName';
import { User } from './user';

@Entity({ name: 'payment_methods' })
export class PaymentMethod {

  @PrimaryColumn({ type: 'uuid', name: 'id_user' })
  id: string;

  @ManyToOne(() => User, (user) => user.paymentMethods,
    {
      primary: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    })
  @JoinColumn({
    name: 'id_user',
    referencedColumnName: 'id',
  })
  user: User;

  @PrimaryColumn({
    type: 'enum',
    enum: PaymentMethodName,
    name: 'payment_method',
  })
  paymentMethod: string;
}
