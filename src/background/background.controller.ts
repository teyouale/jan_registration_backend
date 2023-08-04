import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BackgroundService } from './background.service';
import { UpdateBackgroundDto } from './dto/update-background.dto';
import { CreateEducationDto } from './dto/education.dto';
import { CreateSkillsDto } from './dto/skill.dto';
import { CreateWorkDto } from './dto/work.dto';

@Controller('background')
export class BackgroundController {
  constructor(private readonly backgroundService: BackgroundService) {}

  @Post('/education')
  create(@Body() createeducationDto: CreateEducationDto) {
    // return this.backgroundService.create(createeducationDto);
  }

  @Post('/skill')
  createSkill(@Body() createskilldto: CreateSkillsDto) {
    // return this.backgroundService.createSkill(createskilldto);
  }

  @Post('/work')
  createWork(@Body() createworkdto: CreateWorkDto) {
    return this.backgroundService.createWork(createworkdto);
  }

  @Get()
  findAll() {
    return this.backgroundService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backgroundService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBackgroundDto: UpdateBackgroundDto,
  ) {
    return this.backgroundService.update(+id, updateBackgroundDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backgroundService.remove(+id);
  }
}
