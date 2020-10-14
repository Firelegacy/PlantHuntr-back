import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { PlantEntity } from '../plant/plant.entity';
import { PlantDealEntity } from './plant-deal.entity';

@Entity({ name: 'wanted_swaps' })
@Unique('seller_plant', ['plant', 'plantDeal'])
export class WantedSwapEntity {

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

  @OneToOne(() => PlantEntity)
  @JoinColumn({
    name: 'plant',
    referencedColumnName: 'id',
  })
  plant: PlantEntity;


  @ManyToOne(() => PlantDealEntity, plantDeal => plantDeal.wantedForSwap, {
    nullable: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'plant_deal',
  })
  plantDeal: PlantDealEntity;
}