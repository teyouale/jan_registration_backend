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
  async create(createeducationDto: CreateEducationDto[]): Promise<Education[]> {
    const educations: Education[] = [];
    createeducationDto.forEach((education) => {
      const background = this.repo.create();
      background.filed = education.filed;
      background.school_level = education.school_level;
      background.referenceId = education.referenceId;
      educations.push(background);
    });

    return educations;
  }

  async createSkill(createskilldto: CreateSkillsDto): Promise<Skill[]> {
    console.log('skilldto', createskilldto);

    const skills: Skill[] = [];
    createskilldto.langugaeSkill.forEach((skill) => {
      const background2 = this.skillrepo.create();
      background2.type = 'Language';
      background2.value = skill;
      skills.push(background2);
    });
    createskilldto.professionSkill.forEach((skill) => {
      const background2 = this.skillrepo.create();
      background2.type = 'Profession';
      background2.value = skill;
      skills.push(background2);
    });
    return skills;
  }

  async createWork(createworkdto: CreateWorkDto): Promise<Work> {
    const background3 = new Work();

    background3.sector_of_work = createworkdto.sector_of_work;
    background3.year_of_work = createworkdto.year_of_work;
    background3.license = createworkdto.license;

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
