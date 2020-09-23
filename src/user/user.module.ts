import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PaymentMethod } from './payment-method';
import { StockPlant } from './stock-plant';
import { Plant } from '../plant/plant';
import { BasketItem } from '../checkout/basket-item';
import { Hunt } from '../hunt/hunt';
import { Review } from '../review/review';
import { CollectionPlant } from './collection-plant';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, PaymentMethod, StockPlant, Plant, BasketItem, Hunt, Review, CollectionPlant]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
