import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user';
import { OrderItem } from './order-item';
import { OrderStatus } from '../enum/OrderStatus';

@Entity('orders')
export class Order {

  @PrimaryGeneratedColumn('uuid', { name: 'id_order' })
  id: string;

  @ManyToOne(() => User, (user) => user.orders, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'buyer' })
  buyer: User;

  @ManyToOne(() => User, (user) => user.sales, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'seller' })
  seller: User;

  @Column({
    type: 'double',
    name: 'price',
  })
  total: number;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.PLACED,
  })
  status: OrderStatus;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  items: OrderItem[];

}
