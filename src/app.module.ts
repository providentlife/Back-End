import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserStartingMetricsModule } from './user-starting-metrics/user-starting-metrics.module';
import { WeightEntriesModule } from './weight-entries/weight-entries.module';


@Module({
  imports: [UserModule, UserStartingMetricsModule, WeightEntriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
