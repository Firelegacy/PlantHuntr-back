import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';
import { SellerModule } from './seller/seller.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { CollectionModule } from './collection/collection.module';
import {User} from "./user/user";
import { PlantModule } from './plant/plant.module';
import {Seller} from "./seller/seller";
import {Wishlist} from "./wishlist/wishlist";
import {Collection} from "./collection/collection";
import {CollectionPlant} from "./collection/collection-plant";
import {WishlistPlant} from "./wishlist/wishlist-plant";
import {Plant} from "./plant/plant";

@Module({
  imports: [
    TypeOrmModule.forRoot({
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'root',
          database: 'planthuntr_db',
          entities: [ User, Seller, Wishlist, WishlistPlant, Collection, CollectionPlant, Plant ],
          synchronize: true,
          logging: true,
        }
    ),
    UserModule,
    SellerModule,
    WishlistModule,
    CollectionModule,
    PlantModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
