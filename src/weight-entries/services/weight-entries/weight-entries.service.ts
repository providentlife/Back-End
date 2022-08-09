import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WeightEntries } from 'src/typeorm';

@Injectable()
export class WeightEntriesService {
    constructor(
        @InjectRepository(WeightEntries)
        private weightEntries : Repository<WeightEntries>
    ) {}

    getAllEntries(id) {
        return this.weightEntries.find({where: {userStartingMetrics : {id: id}}});
    }

    insertWeightEntry(body) {
        return this.weightEntries.insert(body);
    }

    updateWeightEntry(id, body) {
        const newWeight = body.weight_lbs;
        return this.weightEntries.update(id , {weight_lbs : newWeight});
    }
}
