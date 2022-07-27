import { Module } from '@nestjs/common';
import { WeightEntriesController } from './controllers/weight-entries/weight-entries.controller';
import { WeightEntriesService } from './services/weight-entries/weight-entries.service';

@Module({
  controllers: [WeightEntriesController],
  providers: [WeightEntriesService]
})
export class WeightEntriesModule {}
