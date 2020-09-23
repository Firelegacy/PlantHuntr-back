import { Module } from '@nestjs/common';
import { PlantDealService } from './plant-deal.service';
import { PlantDealController } from './plant-deal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auction } from './auction';
import { PlantDeal } from './plant-deal';
import { User } from '../user/user';
import { Plant } from '../plant/plant';
import { Bid } from './bid';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlantDeal, Plant, User, Auction, Bid]),
  ],
  providers: [PlantDealService],
  controllers: [PlantDealController],
})
export class PlantDealModule {}
