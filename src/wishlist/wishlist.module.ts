import {Module} from '@nestjs/common';
import {WishlistService} from './wishlist.service';
import {WishlistController} from './wishlist.controller';
import {UserService} from "../user/user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Wishlist} from "./wishlist";
import {User} from "../user/user";
import {Plant} from "../plant/plant";

@Module({
    imports: [
        TypeOrmModule.forFeature([Wishlist, User, Plant])],
    providers: [WishlistService, UserService],
    controllers: [WishlistController]
})
export class WishlistModule {}
