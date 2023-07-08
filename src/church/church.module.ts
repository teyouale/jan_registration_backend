import { Module } from '@nestjs/common';
import { ChurchService } from './church.service';
import { ChurchController } from './church.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Church } from './entities/church.entity';
import { Profile } from 'src/profile/entity/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Church, Profile])],
  controllers: [ChurchController],
  providers: [ChurchService],
  exports: [ChurchService],
})
export class ChurchModule {}
