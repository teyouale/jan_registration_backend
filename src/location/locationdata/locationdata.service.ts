import { Injectable } from '@nestjs/common';
import { CreateLocationdataDto } from "./dto/create-locationdata.dto";
import { UpdateLocationdatumDto } from './dto/update-locationdatum.dto';

@Injectable()
export class LocationdataService {
  create(createLocationdatumDto: CreateLocationdataDto) {
    return "This action adds a new locationdatum";
  }

  findAll() {
    return `This action returns all locationdata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locationdatum`;
  }

  update(id: number, updateLocationdatumDto: UpdateLocationdatumDto) {
    return `This action updates a #${id} locationdatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} locationdatum`;
  }
}
