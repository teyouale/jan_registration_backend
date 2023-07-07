import { Test, TestingModule } from '@nestjs/testing';
import { LocationdataService } from './locationdata.service';

describe('LocationdataService', () => {
  let service: LocationdataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationdataService],
    }).compile();

    service = module.get<LocationdataService>(LocationdataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
