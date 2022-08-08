import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users, userStartingMetrics } from 'src/typeorm';

@Injectable()
export class UserStartingMetricsService {
    constructor(
        @InjectRepository(userStartingMetrics)
        private startingMetrics: Repository<userStartingMetrics>
    ) { }

    getUserMetrics(): Promise<userStartingMetrics[]> { 
        return this.startingMetrics.find();
    }

    getSingleUserMetrics(id): Promise<userStartingMetrics[]> {
        return this.startingMetrics.find({where: {user: {id: id}}});
    }

    postUserMetrics(body) {
        return this.startingMetrics.insert(body);
    }

    deleteUserMetric(id) {
        return this.startingMetrics.delete(id);
    }
}
