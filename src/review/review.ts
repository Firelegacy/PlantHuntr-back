import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'reviews' })
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
  })
  sellerComment: string;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'buyer_comment',
  })
  buyerComment: string;

  /*
   @ManyToOne(() => User, user => user.clientReviews)
   seller: User;

   @ManyToOne(() => User, user => user.sellerReviews)
   buyer: User;

   */
}