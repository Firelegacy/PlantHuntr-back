import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user';
import { Collection } from './collection';
import { Plant } from '../plant/plant';

@Module({
  imports: [
    TypeOrmModule.forFeature([Collection, User, Plant]),
  ],
  providers: [CollectionService, UserService],
  controllers: [CollectionController],
})
export class CollectionModule {}
