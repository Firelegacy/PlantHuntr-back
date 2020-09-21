import { Module } from '@nestjs/common';
import { AuctionController } from './auction.controller';
import { AuctionService } from './auction.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auction } from './auction';
import { Bid } from './bid';
import { PlantDeal } from '../plant-deal/plant-deal';
import { User } from '../user/user';

@Module({
  imports: [
    TypeOrmModule.forFeature([Auction, Bid, PlantDeal, User]),
  ],
  controllers: [AuctionController],
  providers: [AuctionService],
})
export class AuctionModule {}
