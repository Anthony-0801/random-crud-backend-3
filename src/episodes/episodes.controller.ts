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

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log('Sort value is: ', sort);
    return 'This action returns all episodes';
  }

  @Post()
  create(@Body() input: any) {
    console.log('Input data is: ', input);
    return 'This action creates a new episode';
  }

  @Get('featured')
  findFeatured() {
    return 'This action returns featured episodes';
  }

  @Get(':id')
  findOne(@Param() id: string) {
    console.log('Episode ID is: ', id);
    return 'This action returns a specific episode with id';
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
