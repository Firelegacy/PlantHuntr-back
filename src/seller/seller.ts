import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { User } from '../user/user';

@Entity({ name: 'seller' })
export class Seller {

  @PrimaryColumn({ type: 'uuid', name: 'id_user_seller' })
  @OneToOne(() => User, (user) => user.id)
  @JoinColumn()
  user: User;

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

  /*
   @OneToOne(() => Stock)
   @JoinColumn({
   referencedColumnName: 'id',
   })
   stock: Stock;
   */
}