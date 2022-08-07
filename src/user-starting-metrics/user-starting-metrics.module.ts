import { Module } from '@nestjs/common';
import { UserStartingMetricsController } from './controllers/user-starting-metrics/user-starting-metrics.controller';
import { UserStartingMetricsService } from './services/user-starting-metrics/user-starting-metrics.service';
import { userStartingMetrics } from 'src/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([userStartingMetrics])],
  controllers: [UserStartingMetricsController],
  providers: [UserStartingMetricsService]
})
export class UserStartingMetricsModule {}
