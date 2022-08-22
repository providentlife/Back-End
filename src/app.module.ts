import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserStartingMetricsModule } from './user-starting-metrics/user-starting-metrics.module';
import { WeightEntriesModule } from './weight-entries/weight-entries.module';
import entities from './typeorm';

@Module({
  imports: [UserModule, UserStartingMetricsModule, WeightEntriesModule, TypeOrmModule.forRoot({
    type: "postgres",
    url: process.env.DATABASE_URL,
    // host: 'localhost',
    // port: 5432,
    // username: "postgres",
    // password: "password",
    // database: 'project_health',
    entities,
    synchronize: true,
    ssl: {
      rejectUnauthorized: false
    }
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
