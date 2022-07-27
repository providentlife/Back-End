import { Test, TestingModule } from '@nestjs/testing';
import { UserStartingMetricsService } from './user-starting-metrics.service';

describe('UserStartingMetricsService', () => {
  let service: UserStartingMetricsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserStartingMetricsService],
    }).compile();

    service = module.get<UserStartingMetricsService>(UserStartingMetricsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
