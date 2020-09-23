import { Module } from '@nestjs/common';
import { CheckoutController } from './checkout.controller';
import { CheckoutService } from './checkout.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasketItem } from './basket-item';
import { PlantDeal } from '../plant-deal/plant-deal';
import { StockPlant } from '../user/stock-plant';
import { Order } from './order';
import { OrderItem } from './order-item';

@Module({
  imports: [
    TypeOrmModule.forFeature([BasketItem, Order, OrderItem, PlantDeal, StockPlant]),
  ],
  controllers: [CheckoutController],
  providers: [CheckoutService],
})
export class CheckoutModule {}
