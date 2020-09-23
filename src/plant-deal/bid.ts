import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user';
import { Auction } from './auction';

@Entity({ name: 'bids' })
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

  @OneToOne(() => User)
  @JoinColumn({
    name: 'user',
    referencedColumnName: 'id',
  })
  user: User;

  @OneToOne(() => Auction)
  @JoinColumn({
    name: 'auction',
    referencedColumnName: 'id',
  })
  auction: Auction;
}
