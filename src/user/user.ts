import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from './enums/UserType';
import { AuthenticationType } from './enums/AuthenticationType';
import { Seller } from '../seller/seller';
import { Collection } from '../collection/collection';
import { Wishlist } from '../wishlist/wishlist';

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
  })
  verificationPicture: string;

  @OneToOne(type => Wishlist)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  wishlist: Wishlist;

  @OneToOne(type => Collection)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  collection: Collection;

  @OneToOne(type => Seller)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  seller: Seller;
}
