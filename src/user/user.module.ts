import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Seller } from '../seller/seller';
import { Wishlist } from '../wishlist/wishlist';
import { Collection } from '../collection/collection';
import { SellerService } from '../seller/seller.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Seller, Wishlist, Collection]),
  ],
  providers: [UserService, SellerService],
  controllers: [UserController],
})
export class UserModule {}
