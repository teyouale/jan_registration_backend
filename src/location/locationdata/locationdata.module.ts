import { Module } from '@nestjs/common';
import { LocationdataService } from './locationdata.service';
import { LocationdataController } from './locationdata.controller';

@Module({
  controllers: [LocationdataController],
  providers: [LocationdataService]
})
export class LocationdataModule {}
