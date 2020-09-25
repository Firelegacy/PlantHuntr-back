import { CacheModule, Module } from '@nestjs/common';
import { PlantService } from './plant.service';
import { PlantController } from './plant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plant } from './plant';
import { Surname } from './surname';

@Module({
  imports: [
    CacheModule.register(),
    TypeOrmModule.forFeature([Plant, Surname]),
  ],
  providers: [PlantService],
  controllers: [PlantController],
})
export class PlantModule {}
