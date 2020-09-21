import { Injectable } from '@nestjs/common';
import { Collection } from './collection';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CollectionService {
    constructor(
      @InjectRepository(Collection)
      private collectionRepository: Repository<Collection>,
    ) {}

    findAll(): Promise<Collection[]> {
        return this.collectionRepository.find();
    }
}
