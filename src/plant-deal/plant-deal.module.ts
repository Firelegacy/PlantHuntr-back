import { Module } from '@nestjs/common';
import { PlantDealService } from './plant-deal.service';
import { PlantDealController } from './plant-deal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auction } from '../auction/auction';
import { PlantDeal } from './plant-deal';
import { User } from '../user/user';
import { Collection } from '../collection/collection';
import { Plant } from '../plant/plant';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlantDeal, Plant, User, Collection, Auction]),
  ],
  providers: [PlantDealService],
  controllers: [PlantDealController],
})
export class PlantDealModule {}
