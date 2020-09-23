import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from '../enum/UserType';
import { AuthenticationType } from '../enum/AuthenticationType';
import { Seller } from '../seller/seller';

@Entity({ name: 'user' })
export class User {

  @PrimaryGeneratedColumn('uuid', { name: 'id_user' })
  id: string;

  @Index({ unique: true })
  @Column({
    type: 'varchar',
    length: 25,
  })
  username: string;

  @Column({
    type: 'varchar',
    length: 256,
  })
  password: string;

  @Column({
    type: 'datetime',
    name: 'birthday',
  })
  birthday: Date;

  @Column({
    type: 'varchar',
    length: 45,
  })
  country: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  town: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  firstname: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  lastname: string;

  @Column({
    type: 'varchar',
    length: 30,
    nullable: true,
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 150,
  })
  email: string;

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.LAMBDA,
    name: 'user_type',
  })
  userType: UserType;

  @Column({
    type: 'enum',
    enum: AuthenticationType,
    default: AuthenticationType.LOCAL,
    name: 'auth_client',
  })
  authenticationClient: string;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'verification_pic',
    nullable: true,
  })
  verificationPicture: string;

  @OneToOne(() => Seller, (seller) => seller.user)
  @JoinColumn()
  seller: Seller;

  /*@ManyToMany(() => Plant)
   @JoinTable({ name: 'wishlist_plants' })
   wishlist: Plant[];*/

  /*@ManyToMany(() => Plant)
   @JoinTable({
   name: 'collection_plants'
   })
   collection: Plant[];*/

  /*
   @OneToMany(() => Review, review => review.buyer, { lazy: true })
   sellerReviews: Review[];

   @OneToMany(() => Review, review => review.seller, { lazy: true })
   clientReviews: Review[];
   */
}
