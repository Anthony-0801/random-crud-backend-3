import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Episode } from './entity/episode.entity';
import { CreateEpisodeDTO } from './dto/create-episode.dto';

@Injectable()
export class EpisodesService {
  private episodes: Episode[] = [];

  findAll(sort: 'asc' | 'desc' = 'asc') {
    const sortAsc = (a: Episode, b: Episode) => (a.name > b.name ? 1 : -1);
    const sortDesc = (a: Episode, b: Episode) => (a.name < b.name ? 1 : -1);

    return sort === 'asc'
      ? this.episodes.sort(sortAsc)
      : this.episodes.sort(sortDesc);
  }

  findFeatured() {
    return this.episodes.filter((episodes) => episodes.featured);
  }

  async findOne(id: string) {
    return this.episodes.find((episode) => episode.id === id);
  }

  create(createEpisodeDTO: CreateEpisodeDTO) {
    const newEpisode = { ...createEpisodeDTO, id: randomUUID() };
    this.episodes.push(newEpisode);

    return newEpisode;
  }
}
