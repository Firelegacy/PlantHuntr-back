import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ItemType } from '../enum/ItemType';
import { PlantDeal } from '../plant-deal/plant-deal';
import { StockPlant } from '../user/stock-plant';

export class Item {

  @PrimaryGeneratedColumn('uuid', { name: 'id_item' })
  id: string;

  @ManyToOne(() => PlantDeal, {
    nullable: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'id_deal',
    referencedColumnName: 'id',
  })
  plantDeal: PlantDeal;

  @ManyToOne(() => StockPlant, {
    nullable: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'stock_plant',
    referencedColumnName: 'id',
  })
  stockPlant: StockPlant;


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
