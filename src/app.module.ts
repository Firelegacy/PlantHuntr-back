import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PlantModule } from './plant/plant.module';
import { UserModule } from './user/user.module';
import { CheckoutModule } from './checkout/checkout.module';
import { WantedSwap } from './plant-deal/wanted-swap';
import { Item } from './checkout/item';
import { Bid } from './plant-deal/bid';
import { Auction } from './plant-deal/auction';
import { PlantDeal } from './plant-deal/plant-deal';
import { StockPlant } from './user/stock-plant';
import { OrderItem } from './checkout/order-item';
import { Order } from './checkout/order';
import { BasketItem } from './checkout/basket-item';
import { PaymentMethod } from './user/payment-method';
import { User } from './user/user';
import { Surname } from './plant/surname';
import { Plant } from './plant/plant';
import { PlantDealModule } from './plant-deal/plant-deal.module';
import { Review } from './review/review';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'planthuntr_db',
        entities: [Plant, Surname, User, Review, PaymentMethod, Item, BasketItem, Order, OrderItem, StockPlant, PlantDeal, Auction, Bid, WantedSwap],
        synchronize: true,
        logging: true,
      },
    ),

    UserModule,
    PlantModule,
    CheckoutModule,
    ReviewModule,
    PlantDealModule,
    // HuntModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
