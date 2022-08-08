import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserStartingMetricsService } from 'src/user-starting-metrics/services/user-starting-metrics/user-starting-metrics.service';

@Controller('user-starting-metrics')
export class UserStartingMetricsController {
    constructor(private userStartingMetricsService: UserStartingMetricsService) {}

    @Get()
    async getAllMetrics(@Res() res: Response) {
        const allMetrics = await this.userStartingMetricsService.getUserMetrics();
        if (allMetrics.length !== 0) res.status(200).json(allMetrics);
        else res.status(404).json({message: 'No current metrics'});
    }

    @Get(':id')
    async getUserMetrics(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const singleMetric = await this.userStartingMetricsService.getSingleUserMetrics(id);
        if (singleMetric.length !== 0) res.status(200).json(singleMetric);
        else res.status(404).json({message: "metric by this id is not found"});
    }

    @Post()
    async createUserMetrics(@Body() body) {
        return await this.userStartingMetricsService.postUserMetrics(body);
    }

    @Delete(':id')
    async deleteUserMetric(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        await this.userStartingMetricsService.deleteUserMetric(id);
        return res.status(202).json({message: "successfully deleted"});
    }
}
