import {Injectable} from '@nestjs/common';
import {Seller} from "./seller";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class SellerService {
    constructor(
        @InjectRepository(Seller)
        private sellerRepository: Repository<Seller>,
    ) {}

    findAll(): Promise<Seller[]> {
        return this.sellerRepository.find();
    }
}
