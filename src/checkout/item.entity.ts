import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ItemType } from '../enum/ItemType';
import { PlantDealEntity } from '../plant-deal/plant-deal.entity';
import { StockPlantEntity } from '../user/stock-plant.entity';

@Entity('items')
export class ItemEntity {

  @PrimaryGeneratedColumn('uuid', { name: 'id_item' })
  id: string;

  @ManyToOne(() => PlantDealEntity, {
    nullable: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'id_deal',
    referencedColumnName: 'id',
  })
  plantDeal: PlantDealEntity;

  @ManyToOne(() => StockPlantEntity, {
    nullable: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'stock_plant',
    referencedColumnName: 'id',
  })
  stockPlant: StockPlantEntity;


  @Column({
    type: 'double',
    name: 'price',
  })
  total: number;

  @Column({
    type: 'int',
    name: 'quantity',
    default: 1,
  })
  quantity: number;

  @Column({
    type: 'enum',
    enum: ItemType,
    name: 'item_type',
  })
  itemType: string;

}
