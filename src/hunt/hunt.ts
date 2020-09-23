import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => User, (user) => user.hunts, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'user',
    referencedColumnName: 'id',
  })
  user: User;

  @ManyToOne(() => Plant, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'plant',
    referencedColumnName: 'id',
  })
  plant: Plant;
}