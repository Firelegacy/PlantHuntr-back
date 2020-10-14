import { Column, Entity, Index, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from '../enum/UserType';
import { AuthenticationType } from '../enum/AuthenticationType';
import { StockPlantEntity } from './stock-plant.entity';
import { PaymentMethod } from './payment-method';
import { BasketItemEntity } from '../checkout/basket-item.entity';
import { OrderEntity } from '../checkout/order.entity';
import { ReviewEntity } from '../review/review.entity';
import { HuntEntity } from '../hunt/hunt.entity';
import { PlantEntity } from '../plant/plant.entity';
import { CollectionPlantEntity } from './collection-plant.entity';

@Entity({ name: 'users' })
export class UserEntity {

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

  @OneToMany(() => BasketItemEntity, (basketItem) => basketItem.user)
  basket: BasketItemEntity[];

  @OneToMany(() => OrderEntity, (order) => order.buyer)
  orders: OrderEntity[];

  @OneToMany(() => HuntEntity, (hunt) => hunt.user)
  hunts: HuntEntity[];

  @ManyToMany(() => PlantEntity)
  @JoinTable({ name: 'wishlist_plants' })
  wishlist: PlantEntity[];

  @OneToMany(() => CollectionPlantEntity, (collectionnPlant) => collectionnPlant.user)
  @JoinTable()
  collection: CollectionPlantEntity[];

  @OneToMany(() => ReviewEntity, review => review.buyer, { lazy: true })
  sellerReviews: ReviewEntity[];

  @OneToMany(() => ReviewEntity, review => review.seller, { lazy: true })
  clientReviews: ReviewEntity[];

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
  @OneToMany(() => StockPlantEntity, (stockPlant) => stockPlant.user)
  stock: StockPlantEntity[];

  // stays empty if not UserType.SELLER
  @OneToMany(() => OrderEntity, (order) => order.seller)
  sales: OrderEntity[];
}
