import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { ItemEntity } from './item.entity';

@Entity({ name: 'basket_items' })
export class BasketItemEntity extends ItemEntity {

  @ManyToOne(() => UserEntity, (user) => user.basket, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'id_user',
  })
  user: UserEntity;

}
