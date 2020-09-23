import { Module } from '@nestjs/common';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from '../seller/seller';
import { Plant } from '../plant/plant';
import { Stock } from './stock';
import { SoldStockPlant } from './sold-stock-plant';

@Module({
  imports: [
    TypeOrmModule.forFeature([Stock, Seller, Plant, SoldStockPlant]),
  ],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
