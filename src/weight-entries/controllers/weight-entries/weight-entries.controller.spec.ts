import { Test, TestingModule } from '@nestjs/testing';
import { WeightEntriesController } from './weight-entries.controller';

describe('WeightEntriesController', () => {
  let controller: WeightEntriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeightEntriesController],
    }).compile();

    controller = module.get<WeightEntriesController>(WeightEntriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
