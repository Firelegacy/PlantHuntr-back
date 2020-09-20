import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../user/user";
import {Repository} from "typeorm";
import {Wishlist} from "./wishlist";

@Injectable()
export class WishlistService {
    constructor(
        @InjectRepository(User)
        private wishlistRepository: Repository<Wishlist>,
    ) {
    }

    findAll(): Promise<Wishlist[]> {
        return this.wishlistRepository.find();
    }

    findOne(id: string): Promise<Wishlist> {
        return this.wishlistRepository.findOne(id);
    }
}
