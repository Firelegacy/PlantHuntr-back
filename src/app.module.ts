import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';
import { SellerModule } from './seller/seller.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CollectionModule } from './collection/collection.module';
import { User } from './user/user';
import { PlantModule } from './plant/plant.module';
import { Seller } from './seller/seller';
import { Wishlist } from './wishlist/wishlist';
import { Collection } from './collection/collection';
import { CollectionPlant } from './collection/collection-plant';
import { WishlistPlant } from './wishlist/wishlist-plant';
import { Plant } from './plant/plant';
import { PlantDealModule } from './plant-deal/plant-deal.module';
import { StockModule } from './stock/stock.module';
import { AuctionModule } from './auction/auction.module';
import { Surname } from './plant/surname';
import { Rating } from './user/rating';
import { Auction } from './auction/auction';
import { Bid } from './auction/bid';
import { PlantDeal } from './plant-deal/plant-deal';
import { DealPayment } from './plant-deal/deal-payment';
import { PaymentModule } from './payment/payment.module';
import { WantedSwap } from './plant-deal/wanted-swap';
import { Payment } from './payment/payment';
import { StockPlant } from './stock/stock-plant';
import { Stock } from './stock/stock';
import { HuntModule } from './hunt/hunt.module';
import { Hunt } from './hunt/hunt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'planthuntr_db',
      entities: [User, Rating, Hunt, Wishlist, WishlistPlant, Collection, CollectionPlant, Plant, Surname,
        PlantDeal, DealPayment, WantedSwap, Payment, Auction, Bid, Seller, Stock, StockPlant],
        synchronize: true,
        logging: true,
      },
    ),
    UserModule,
    SellerModule,
    WishlistModule,
    CollectionModule,
    PlantModule,
    PlantDealModule,
    StockModule,
    AuctionModule,
    PaymentModule,
    HuntModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
