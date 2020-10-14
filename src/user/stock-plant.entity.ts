import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, Unique } from 'typeorm';
import { PlantEntity } from '../plant/plant.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'stock_plants' })
@Unique('seller_plant', ['user', 'plant'])
export class StockPlantEntity {

  @PrimaryColumn('uuid', { name: 'id_stock_plant' })
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.stock, {
    primary: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'user',
  })
  user: UserEntity;

  @ManyToOne(() => PlantEntity, {
    primary: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'plant',
    referencedColumnName: 'id',
  })
  plant: PlantEntity;

  @Column({
    type: 'double',
    name: 'price',
  })
  price: number;

  @Column({
    type: 'int',
    name: 'quantity',
    default: 1,
  })
  quantity: number;

  @Column({
    type: 'varchar',
    length: 256,
    name: 'barcode',
  })
  barcode: string;
}
