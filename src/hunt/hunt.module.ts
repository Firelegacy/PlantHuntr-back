import { Module } from '@nestjs/common';
import { HuntController } from './hunt.controller';
import { HuntService } from './hunt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user';
import { Plant } from '../plant/plant';
import { Hunt } from './hunt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hunt, Plant, User]),
  ],
  controllers: [HuntController],
  providers: [HuntService],
})
export class HuntModule {}
