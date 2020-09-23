import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Plant } from '../plant/plant';
import { PlantDeal } from './plant-deal';

@Entity({ name: 'wanted_swaps' })
@Unique('seller_plant', ['plant', 'plantDeal'])
export class WantedSwap {

  @PrimaryGeneratedColumn(
    'uuid',
    { name: 'id_wanted_swap' })
  id: string;

  @Column({
    type: 'double',
    name: 'price',
    default: 0.0,
  })
  amount: number;

  @OneToOne(() => Plant)
  @JoinColumn({
    name: 'plant',
    referencedColumnName: 'id',
  })
  plant: Plant;


  @ManyToOne(() => PlantDeal, plantDeal => plantDeal.wantedForSwap, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'plant_deal',
  })
  plantDeal: PlantDeal;
}