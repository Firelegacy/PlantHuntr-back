import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ItemEntity } from './item.entity';
import { OrderEntity } from './order.entity';

@Entity('order_items')
export class OrderItemEntity extends ItemEntity {

  @ManyToOne(() => OrderEntity, (order) => order.items, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'id_order',
  })
  order: OrderEntity;

}

