import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user';

@Entity({ name: 'seller' })
export class Seller {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_seller' })
  id: string;

  @Column({
    type: 'varchar',
    length: 150,
  })
  address: string;

  @Index({ unique: true })
  @Column({
    type: 'varchar',
    length: 50,
    name: 'company_id_number',
  })
  companyNumber: string;

  @Column({
    type: 'varchar',
    length: 45,
  })
  country: string;

  @Column({
    type: 'varchar',
    length: 30,
    name: 'business_phone',
  })
  businessPhone: string;

  @Column({
    type: 'varchar',
    length: 150,
    name: 'business_email',
  })
  businessEmail: string;

  @Column({
    type: 'boolean',
    default: false,
    name: 'paypal',
  })
  hasPaypal: boolean;

  @Column({
    type: 'boolean',
    default: false,
    name: 'sepa',
  })
  hasSEPA: boolean;

  @Column({
    type: 'boolean',
    default: false,
    name: 'visa_mastercard',
  })
  hasVisaMastercard: boolean;

  @Index({ unique: true })
  @OneToOne(type => User)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  user: User;
}