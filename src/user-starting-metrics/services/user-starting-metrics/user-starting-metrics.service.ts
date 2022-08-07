import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userStartingMetrics } from 'src/typeorm';

@Injectable()
export class UserStartingMetricsService {
    constructor(
        @InjectRepository(userStartingMetrics)
        private startingMetrics : Repository<userStartingMetrics>
    ){}

    
}
