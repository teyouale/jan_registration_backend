import { Test, TestingModule } from '@nestjs/testing';
import { LocationdataController } from './locationdata.controller';
import { LocationdataService } from './locationdata.service';

describe('LocationdataController', () => {
  let controller: LocationdataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationdataController],
      providers: [LocationdataService],
    }).compile();

    controller = module.get<LocationdataController>(LocationdataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
