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

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'planthuntr_db',
        entities: [Plant, Surname, User, PaymentMethod, StockPlant],
        synchronize: true,
        logging: true,
      },
    ),
    UserModule,
    PlantModule,
    // ReviewModule,
    // PlantDealModule,
    // AuctionModule,
    // HuntModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
