import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user';
import { Plant } from '../plant/plant';
import { HuntStatus } from './enums/HuntStatus';

@Entity({ name: 'hunt' })
export class Hunt {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_hunt' })
  id: string;

  @CreateDateColumn({
    type: 'datetime',
    name: 'requested_date',
  })
  requestedDate: Date;

  @Column({
    type: 'double',
    name: 'price',
  })
  price: number;

  @Column({
    type: 'enum',
    name: 'hunt_status',
    enum: HuntStatus,
    default: HuntStatus.REQUESTED,
  })
  status: HuntStatus;

  @UpdateDateColumn({
    type: 'datetime',
    name: 'last_update',
  })
  lastUpdate: Date;

  @OneToOne(type => User)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  user: User;

  @OneToOne(type => Plant)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  plant: Plant;
}