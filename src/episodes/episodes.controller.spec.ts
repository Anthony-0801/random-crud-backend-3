import { Test, TestingModule } from '@nestjs/testing';
import { EpisodesController } from './episodes.controller';
import { EpisodesService } from './episodes.service';

describe('EpisodesController', () => {
  let controller: EpisodesController;

  const mockEpisodesService = {
    findAll: () => [{ id: 'id' }],
    findFeatured: () => [{ id: 'id' }],
    findOne: () => ({ id: 'id' }),
    create: () => ({ id: 'id' }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EpisodesController],
      providers: [{ provide: EpisodesService, useValue: mockEpisodesService }],
    }).compile();

    controller = module.get<EpisodesController>(EpisodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of episodes', () => {
      expect(controller.findAll()).toEqual([{ id: 'id' }]);
    });
  });

  describe('findFeatured', () => {
    it('should return an array of featured episodes', () => {
      expect(controller.findFeatured()).toEqual([{ id: 'id' }]);
    });
  });

  describe('findOne', () => {
    it('should return a single episode by id', () => {
      expect(controller.findOne('id')).toEqual({ id: 'id' });
    });
  });

  describe('create', () => {
    it('should create a new episode and return it', () => {
      const newEpisode = { name: 'New Episode' };
      expect(controller.create(newEpisode)).toEqual({ id: 'id' });
    });
  });
});
