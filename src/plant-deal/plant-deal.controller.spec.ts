import { Test, TestingModule } from '@nestjs/testing';
import { PlantDealController } from './plant-deal.controller';

describe('PlantDealController', () => {
  let controller: PlantDealController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlantDealController],
    }).compile();

    controller = module.get<PlantDealController>(PlantDealController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
