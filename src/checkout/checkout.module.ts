import { Module } from '@nestjs/common';
import { CheckoutController } from './checkout.controller';
import { CheckoutService } from './checkout.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasketItemEntity } from './basket-item.entity';
import { PlantDealEntity } from '../plant-deal/plant-deal.entity';
import { StockPlantEntity } from '../user/stock-plant.entity';
import { OrderEntity } from './order.entity';
import { OrderItemEntity } from './order-item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BasketItemEntity, OrderEntity, OrderItemEntity, PlantDealEntity, StockPlantEntity]),
  ],
  controllers: [CheckoutController],
  providers: [CheckoutService],
})
export class CheckoutModule {}
