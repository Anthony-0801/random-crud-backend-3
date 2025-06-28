import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDTO } from './dto/create-episode.dto';
import { isPositivePipe } from './pipes/is-positive.pipe';

@Controller('episodes')
export class EpisodesController {
  constructor(private episodesService: EpisodesService) {}

  @Get()
  findAll(
    @Query('sort') sort: 'asc' | 'desc' = 'desc',
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe, isPositivePipe)
    limit: number,
  ) {
    console.log('Sort value is: ', sort);
    console.log('Limit value is: ', limit);
    return this.episodesService.findAll(sort);
  }

  @Post()
  create(@Body(ValidationPipe) input: CreateEpisodeDTO) {
    console.log('Input data is: ', input);
    return this.episodesService.create(input);
  }

  @Get('featured')
  findFeatured() {
    return this.episodesService.findFeatured();
  }

  @Get(':id')
  async findOne(@Param() id: string) {
    console.log('Episode ID is: ', id);
    const episode = await this.episodesService.findOne(id);
    if (!episode) {
      throw new NotFoundException('Episode not found');
    }
    return episode;
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
