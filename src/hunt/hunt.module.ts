import { Module } from '@nestjs/common';
import { HuntController } from './hunt.controller';
import { HuntService } from './hunt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { PlantEntity } from '../plant/plant.entity';
import { HuntEntity } from './hunt.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([HuntEntity, PlantEntity, UserEntity]),
  ],
  controllers: [HuntController],
  providers: [HuntService],
})
export class HuntModule {}
