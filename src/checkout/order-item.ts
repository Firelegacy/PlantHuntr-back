import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Item } from './item';
import { Order } from './order';

@Entity('order_items')
export class OrderItem extends Item {

  @ManyToOne(() => Order, (order) => order.items, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'id_order',
  })
  order: Order;

}

