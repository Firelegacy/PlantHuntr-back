import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user';
import { Seller } from './seller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Seller, User]),
  ],
  providers: [SellerService],
  controllers: [SellerController],
})
export class SellerModule {}
