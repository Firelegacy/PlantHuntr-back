import { Module } from '@nestjs/common';
import { PlantDealService } from './plant-deal.service';
import { PlantDealController } from './plant-deal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionEntity } from './auction.entity';
import { PlantDealEntity } from './plant-deal.entity';
import { UserEntity } from '../user/user.entity';
import { PlantEntity } from '../plant/plant.entity';
import { BidEntity } from './bid.entity';
import { WantedSwapEntity } from './wanted-swap.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([PlantDealEntity, PlantEntity, UserEntity, AuctionEntity, BidEntity, WantedSwapEntity]),
  ],
  providers: [PlantDealService],
  controllers: [PlantDealController],
})
export class PlantDealModule {}
