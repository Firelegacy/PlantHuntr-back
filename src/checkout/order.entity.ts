import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { OrderItemEntity } from './order-item.entity';
import { OrderStatus } from '../enum/OrderStatus';

@Entity('orders')
export class OrderEntity {

  @PrimaryGeneratedColumn('uuid', { name: 'id_order' })
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.orders, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'buyer' })
  buyer: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.sales, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'seller' })
  seller: UserEntity;

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

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.order)
  items: OrderItemEntity[];

}
