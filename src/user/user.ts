import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from '../enum/UserType';
import { AuthenticationType } from '../enum/AuthenticationType';
import { StockPlant } from './stock-plant';
import { PaymentMethod } from './payment-method';
import { BasketItem } from '../checkout/basket-item';
import { Order } from '../checkout/order';

@Entity({ name: 'users' })
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
    length: 150,
    nullable: true,
  })
  address: string;

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

  @OneToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.user)
  paymentMethods: PaymentMethod[];

  @OneToMany(() => BasketItem, (basketItem) => basketItem.user)
  basket: BasketItem[];

  @OneToMany(() => Order, (order) => order.buyer)
  orders: Order[];

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

  /* Seller specific - UserType.SELLER */
  /* if UserType.SELLER then the following fields are not nullable */

  @Index({ unique: true })
  @Column({
    type: 'varchar',
    length: 50,
    name: 'company_id_number',
    nullable: true,
  })
  companyNumber: string;

  @Column({
    type: 'varchar',
    length: 30,
    name: 'business_phone',
    nullable: true,
  })
  businessPhone: string;

  @Column({
    type: 'varchar',
    length: 150,
    name: 'business_email',
    nullable: true,
  })
  businessEmail: string;

  // stays empty if not UserType.SELLER
  @OneToMany(() => StockPlant, (stockPlant) => stockPlant.user)
  stock: StockPlant[];

  // stays empty if not UserType.SELLER
  @OneToMany(() => Order, (order) => order.seller)
  sales: Order[];
}
