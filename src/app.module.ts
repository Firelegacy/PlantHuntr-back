import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PlantModule } from './plant/plant.module';
import { UserModule } from './user/user.module';
import { Plant } from './plant/plant';
import { PaymentMethod } from './user/payment-method';
import { BasketItem } from './checkout/basket-item';
import { Item } from './checkout/item';
import { Hunt } from './hunt/hunt';
import { Review } from './review/review';
import { User } from './user/user';
import { Surname } from './plant/surname';
import { Order } from './checkout/order';
import { OrderItem } from './checkout/order-item';
import { CollectionPlant } from './user/collection-plant';
import { StockPlant } from './user/stock-plant';
import { PlantDeal } from './plant-deal/plant-deal';
import { Auction } from './plant-deal/auction';
import { Bid } from './plant-deal/bid';
import { WantedSwap } from './plant-deal/wanted-swap';
import { CheckoutModule } from './checkout/checkout.module';
import { ReviewModule } from './review/review.module';
import { PlantDealModule } from './plant-deal/plant-deal.module';
import { HuntModule } from './hunt/hunt.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'planthuntr',
        entities: [Plant, Surname, User, Review, Hunt, PaymentMethod, Item, BasketItem, Order, OrderItem, CollectionPlant, StockPlant, PlantDeal, Auction, Bid, WantedSwap],
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
      },
    ),

    UserModule,
    PlantModule,
    CheckoutModule,
    ReviewModule,
    PlantDealModule,
    HuntModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
