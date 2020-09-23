import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PlantModule } from './plant/plant.module';
import { Plant } from './plant/plant';
import { Surname } from './plant/surname';
import { User } from './user/user';
import { UserModule } from './user/user.module';
import { StockPlant } from './user/stock-plant';
import { PaymentMethod } from './user/payment-method';
import { CheckoutModule } from './checkout/checkout.module';
import { PlantDeal } from './plant-deal/plant-deal';
import { BasketItem } from './checkout/basket-item';
import { Order } from './checkout/order';
import { OrderItem } from './checkout/order-item';
import { PlantDealModule } from './plant-deal/plant-deal.module';
import { Bid } from './plant-deal/bid';
import { Auction } from './plant-deal/auction';
import { Item } from './checkout/item';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'planthuntr_db',
        entities: [Plant, Surname, User, PaymentMethod, BasketItem, Order, OrderItem, StockPlant, PlantDeal, Auction, Bid, Item],
        synchronize: true,
        logging: true,
      },
    ),
    UserModule,
    PlantModule,
    CheckoutModule,
    // ReviewModule,
    PlantDealModule,
    // HuntModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
