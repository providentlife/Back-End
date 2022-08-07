import { Controller } from '@nestjs/common';
import { UserStartingMetricsService } from 'src/user-starting-metrics/services/user-starting-metrics/user-starting-metrics.service';

@Controller('user-starting-metrics')
export class UserStartingMetricsController {
    constructor(private userStartingMetricsService: UserStartingMetricsService) {}
}
