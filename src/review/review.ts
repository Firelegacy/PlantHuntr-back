import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { User } from '../user/user';

@Entity({ name: 'reviews' })
@Unique('buyer_seller', ['buyer', 'seller'])
export class Review {

  @PrimaryGeneratedColumn('uuid', { name: 'id_rating' })
  id: string;

  @Column({
    type: 'double',
    name: 'seller_rating',
  })
  sellerRating: number;

  @Column({
    type: 'double',
    name: 'buyer_rating',
  })
  buyerRating: number;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'seller_comment',
    nullable: true,
  })
  sellerComment: string;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'buyer_comment',
    nullable: true,
  })
  buyerComment: string;

  @ManyToOne(() => User, user => user.clientReviews, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'seller' })
  seller: User;

  @ManyToOne(() => User, user => user.sellerReviews, {
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'buyer' })
  buyer: User;

}