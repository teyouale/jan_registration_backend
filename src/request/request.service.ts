import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request } from './entities/request.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RequestService {
  constructor(@InjectRepository(Request) private repo: Repository<Request>) {}
  // create(createRequestDto: CreateRequestDto) {
  //   return 'This action adds a new request';
  // }

  async create(createRequestDto: CreateRequestDto): Promise<Request> {
    console.log(createRequestDto);
    const create = this.repo.create(createRequestDto);
    return this.repo.save(create);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  // async remove(id: string) {
  //   const request = await this.findOne(id);

  //   if (!request) {
  //     throw new NotFoundException('profile not found');
  //   }

  //   return this.repo.remove(request);
  // }
}
