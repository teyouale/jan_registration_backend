import { Module } from '@nestjs/common';
import { BackgroundService } from './background.service';
import { BackgroundController } from './background.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Education } from './entities/education.entity';
import { Skill } from './entities/skill.entity';
import { Work } from './entities/work.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Education, Skill, Work])],
  controllers: [BackgroundController],
  providers: [BackgroundService],
  exports: [BackgroundService],
})
export class BackgroundModule {}
