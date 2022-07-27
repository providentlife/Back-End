import { Module } from '@nestjs/common';
import { UserStartingMetricsController } from './controllers/user-starting-metrics/user-starting-metrics.controller';
import { UserStartingMetricsService } from './services/user-starting-metrics/user-starting-metrics.service';

@Module({
  controllers: [UserStartingMetricsController],
  providers: [UserStartingMetricsService]
})
export class UserStartingMetricsModule {}
