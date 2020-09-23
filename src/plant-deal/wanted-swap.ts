import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Plant } from '../plant/plant';

@Entity({ name: 'wanted_swap' })
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
    referencedColumnName: 'id',
  })
  plant: Plant;

  /*
   @ManyToOne(() => PlantDeal, plantDeal => plantDeal.wantedForSwap)
   plantDeal: PlantDeal;

   */
}