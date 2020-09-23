import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PlantModule } from './plant/plant.module';
import { Plant } from './plant/plant';
import { Surname } from './plant/surname';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'planthuntr_db',
        entities: [Plant, Surname/*User, Rating, Hunt, PlantDeal, WantedSwap,
         Payment, Auction, Bid, Seller, Stock, StockPlant*/],
        synchronize: true,
        logging: true,
      },
    ),
    // UserModule,
    // SellerModule,
    PlantModule,
    // PlantDealModule,
    // StockModule,
    // AuctionModule,
    // PaymentModule,
    // HuntModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
