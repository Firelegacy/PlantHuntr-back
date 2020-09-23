import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { PlantModule } from './plant/plant.module';
import { Plant } from './plant/plant';
import { Surname } from './plant/surname';
import { Seller } from './seller/seller';
import { User } from './user/user';
import { UserModule } from './user/user.module';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'planthuntr_db',
        entities: [Plant, Surname, User, Seller],
        synchronize: true,
        logging: true,
      },
    ),
    UserModule,
    SellerModule,
    PlantModule,
    // ReviewModule,
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
