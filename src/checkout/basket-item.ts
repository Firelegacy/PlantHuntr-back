import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user';
import { Item } from './item';

@Entity({ name: 'basket_items' })
export class BasketItem extends Item {

  @ManyToOne(() => User, (user) => user.basket, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'id_user',
  })
  user: User;

}
