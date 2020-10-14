import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PlantModule } from './plant/plant.module';
import { UserModule } from './user/user.module';
import { PlantEntity } from './plant/plant.entity';
import { PaymentMethod } from './user/payment-method';
import { BasketItemEntity } from './checkout/basket-item.entity';
import { ItemEntity } from './checkout/item.entity';
import { HuntEntity } from './hunt/hunt.entity';
import { ReviewEntity } from './review/review.entity';
import { UserEntity } from './user/user.entity';
import { SurnameEntity } from './plant/surname.entity';
import { OrderEntity } from './checkout/order.entity';
import { OrderItemEntity } from './checkout/order-item.entity';
import { CollectionPlantEntity } from './user/collection-plant.entity';
import { StockPlantEntity } from './user/stock-plant.entity';
import { PlantDealEntity } from './plant-deal/plant-deal.entity';
import { AuctionEntity } from './plant-deal/auction.entity';
import { BidEntity } from './plant-deal/bid.entity';
import { WantedSwapEntity } from './plant-deal/wanted-swap.entity';
import { CheckoutModule } from './checkout/checkout.module';
import { ReviewModule } from './review/review.module';
import { PlantDealModule } from './plant-deal/plant-deal.module';
import { HuntModule } from './hunt/hunt.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'planthuntr',
        entities: [PlantEntity, SurnameEntity, UserEntity, ReviewEntity, HuntEntity, PaymentMethod, ItemEntity, BasketItemEntity, OrderEntity, OrderItemEntity, CollectionPlantEntity, StockPlantEntity, PlantDealEntity, AuctionEntity, BidEntity, WantedSwapEntity],
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
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
