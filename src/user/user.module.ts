import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PaymentMethod } from './payment-method';
import { StockPlant } from './stock-plant';
import { Plant } from '../plant/plant';
import { BasketItem } from '../checkout/basket-item';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, PaymentMethod, StockPlant, Plant, BasketItem]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
