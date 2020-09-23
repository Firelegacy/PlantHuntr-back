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
import { HuntStatus } from '../enum/HuntStatus';

@Entity({ name: 'hunts' })
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

  @OneToOne(() => User)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  user: User;

  @OneToOne(() => Plant)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  plant: Plant;
}