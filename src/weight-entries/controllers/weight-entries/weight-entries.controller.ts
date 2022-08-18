import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { WeightEntriesService } from 'src/weight-entries/services/weight-entries/weight-entries.service';

@Controller('weight-entries')
export class WeightEntriesController {
    constructor(private weightEntryService: WeightEntriesService) {}

    @Get(':id')
    async getAllWeightEntriesFromOneSession(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const allWeightEntries = await this.weightEntryService.getAllEntries(id);
        if (allWeightEntries.length !== 0) return res.status(200).json(allWeightEntries);
        else return res.status(204).json({allWeightEntries, message: "No weight entries"});
    }

    @Post()
    async postWeightEntry(@Body() body) {
        return await this.weightEntryService.insertWeightEntry(body);
    }

    @Put(':id')
    async updateWeightEntry(@Param('id', ParseIntPipe) id : number, @Res() res: Response, @Body() body) {
        const updatedEntry = await this.weightEntryService.updateWeightEntry(id, body);
        return res.status(201).json({message: "successfully updated"});
    }
}
