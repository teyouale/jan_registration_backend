import { Injectable } from '@nestjs/common';
import { CreateChurchDto } from './dto/create-church.dto';
import { UpdateChurchDto } from './dto/update-church.dto';
import { Church } from './entities/church.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ChurchService {
  constructor(
    @InjectRepository(Church)
    private repo: Repository<Church>,
  ) {}
  async create(createChurchDto: CreateChurchDto): Promise<Church> {
    const church = new Church();

    church.participate = createChurchDto.participate;
    church.participateBy = createChurchDto.participate;
    church.repent_father = createChurchDto.repent_father;

    return church;
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} church`;
  }

  update(id: number, updateChurchDto: UpdateChurchDto) {
    return `This action updates a #${id} church`;
  }

  remove(id: number) {
    return `This action removes a #${id} church`;
  }
}
