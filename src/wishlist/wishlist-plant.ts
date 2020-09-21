import { Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plant } from '../plant/plant';
import { Wishlist } from './wishlist';

@Entity({ name: 'wishlist_plant' })
@Index(['wishlist', 'plant'], { unique: true })
export class WishlistPlant {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_wishlist' })
  id: string;

  @OneToOne(type => Wishlist)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  wishlist: Wishlist;

  @OneToOne(type => Plant)
  @JoinColumn({
    referencedColumnName: 'id',
  })
  plant: Plant;
}