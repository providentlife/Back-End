import { Test, TestingModule } from '@nestjs/testing';
import { UserStartingMetricsController } from './user-starting-metrics.controller';

describe('UserStartingMetricsController', () => {
  let controller: UserStartingMetricsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserStartingMetricsController],
    }).compile();

    controller = module.get<UserStartingMetricsController>(UserStartingMetricsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
