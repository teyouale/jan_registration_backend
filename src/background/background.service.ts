import { Injectable } from '@nestjs/common';
import { CreateBackgroundDto } from './dto/create-background.dto';
import { UpdateBackgroundDto } from './dto/update-background.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEducationDto } from './dto/education.dto';
import { Education } from './entities/education.entity';
import { Skill } from './entities/skill.entity';
import { CreateSkillsDto } from './dto/skill.dto';
import { CreateWorkDto } from './dto/work.dto';
import { Work } from './entities/work.entity';

@Injectable()
export class BackgroundService {
  constructor(
    @InjectRepository(Education)
    private repo: Repository<Education>,
    @InjectRepository(Skill) private skillrepo: Repository<Skill>,
    @InjectRepository(Work) private workrepo: Repository<Work>,
  ) {}
  async create(createeducationDto: CreateEducationDto): Promise<Education> {
    const background = new Education();

    background.filed = createeducationDto.filed;
    background.school_level = createeducationDto.school_level;

    return this.repo.save(background);
  }

  async createSkill(createskilldto: CreateSkillsDto[]): Promise<Skill[]> {
    const skills: Skill[] = [];
    createskilldto.forEach((skill) => {
      const background2 = this.skillrepo.create();
      background2.type = skill.type;
      background2.value = skill.value;
      background2.referenceId = skill.referenceId;
      skills.push(background2);
    });
    return skills;
  }

  async createWork(createworkdto: CreateWorkDto): Promise<Work> {
    const background3 = new Work();

    background3.sector_of_work = createworkdto.sector_of_work;
    background3.year_of_work = createworkdto.year_of_work;

    return background3;
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} background`;
  }

  update(id: number, updateBackgroundDto: UpdateBackgroundDto) {
    return `This action updates a #${id} background`;
  }

  remove(id: number) {
    return `This action removes a #${id} background`;
  }
}
