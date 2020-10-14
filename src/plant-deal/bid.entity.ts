import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { AuctionEntity } from './auction.entity';

@Entity({ name: 'bids' })
export class BidEntity {

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

  @OneToOne(() => UserEntity)
  @JoinColumn({
    name: 'user',
    referencedColumnName: 'id',
  })
  user: UserEntity;

  @OneToOne(() => AuctionEntity)
  @JoinColumn({
    name: 'auction',
    referencedColumnName: 'id',
  })
  auction: AuctionEntity;
}
