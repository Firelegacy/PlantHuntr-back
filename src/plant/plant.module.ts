import { Module } from '@nestjs/common';
import { PlantService } from './plant.service';
import { PlantController } from './plant.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/user";
import {Plant} from "./plant";

@Module({
  imports : [
    TypeOrmModule.forFeature([Plant])
  ],
  providers: [PlantService],
  controllers: [PlantController]
})
export class PlantModule {}
