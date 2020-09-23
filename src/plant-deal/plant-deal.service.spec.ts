import { Test, TestingModule } from '@nestjs/testing';
import { PlantDealService } from './plant-deal.service';

describe('PlantDealService', () => {
  let service: PlantDealService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlantDealService],
    }).compile();

    service = module.get<PlantDealService>(PlantDealService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
