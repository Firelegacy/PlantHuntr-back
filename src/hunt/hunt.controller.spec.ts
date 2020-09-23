import { Test, TestingModule } from '@nestjs/testing';
import { HuntController } from './hunt.controller';

describe('HuntController', () => {
  let controller: HuntController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HuntController],
    }).compile();

    controller = module.get<HuntController>(HuntController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
