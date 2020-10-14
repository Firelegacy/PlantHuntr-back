import { CacheModule, Module } from '@nestjs/common';
import { PlantService } from './plant.service';
import { PlantController } from './plant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlantEntity } from './plant.entity';
import { SurnameEntity } from './surname.entity';

@Module({
  imports: [
    CacheModule.register(),
    TypeOrmModule.forFeature([PlantEntity, SurnameEntity]),
  ],
  providers: [PlantService],
  controllers: [PlantController],
})
export class PlantModule {}
