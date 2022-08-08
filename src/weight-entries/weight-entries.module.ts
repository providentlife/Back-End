import { Module } from '@nestjs/common';
import { WeightEntriesController } from './controllers/weight-entries/weight-entries.controller';
import { WeightEntriesService } from './services/weight-entries/weight-entries.service';
import { WeightEntries } from 'src/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WeightEntries])],
  controllers: [WeightEntriesController],
  providers: [WeightEntriesService]
})
export class WeightEntriesModule {}
