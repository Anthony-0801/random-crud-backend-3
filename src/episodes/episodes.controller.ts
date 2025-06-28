import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDTO } from './dto/create-episode.dto';

@Controller('episodes')
export class EpisodesController {
  constructor(private episodesService: EpisodesService) {}

  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log('Sort value is: ', sort);
    return this.episodesService.findAll(sort);
  }

  @Post()
  create(@Body() input: CreateEpisodeDTO) {
    console.log('Input data is: ', input);
    return this.episodesService.create(input);
  }

  @Get('featured')
  findFeatured() {
    return this.episodesService.findFeatured();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    console.log('Episode ID is: ', id);
    return this.episodesService.findOne(id);
  }

  @Put(':id')
  update(@Param() id: string, @Body() input: any) {
    console.log('Updating episode with ID: ', id);
    console.log('Input data is: ', input);
    return 'This action updates a specific episode';
  }

  @Delete(':id')
  delete(@Param() id: string) {
    console.log('Deleting episode with ID: ', id);
    return 'This action deletes a specific episode';
  }
}
