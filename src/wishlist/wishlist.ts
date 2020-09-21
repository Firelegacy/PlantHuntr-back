import { Column, CreateDateColumn, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user';

@Entity({ name: 'wishlist' })
export class Wishlist {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_wishlist' })
  id: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  name: string;

  @CreateDateColumn({
    type: 'datetime',
    name: 'creation_date',
  })
  creationDate: Date;

  @Index({ unique: true })
  @OneToOne(type => User)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  user: User;
}