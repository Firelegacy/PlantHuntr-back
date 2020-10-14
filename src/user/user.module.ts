import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PaymentMethod } from './payment-method';
import { StockPlantEntity } from './stock-plant.entity';
import { PlantEntity } from '../plant/plant.entity';
import { BasketItemEntity } from '../checkout/basket-item.entity';
import { HuntEntity } from '../hunt/hunt.entity';
import { ReviewEntity } from '../review/review.entity';
import { CollectionPlantEntity } from './collection-plant.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, PaymentMethod, StockPlantEntity, PlantEntity, BasketItemEntity, HuntEntity, ReviewEntity, CollectionPlantEntity]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
