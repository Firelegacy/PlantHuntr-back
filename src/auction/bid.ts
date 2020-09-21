import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user';
import { Auction } from './auction';

@Entity({ name: 'bid' })
export class Bid {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_bid' })
  id: string;

  @Column({
    type: 'double',
  })
  amount: number;

  @CreateDateColumn({
    type: 'datetime',
    name: 'timestamp',
  })
  timestamp: Date;

  @OneToOne(type => User)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  user: User;

  @OneToOne(type => Auction)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  auction: Auction;
}
