import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { Profile } from './entity/profile.entity';
import { UsersModule } from 'src/users/users.module';
import { DocumentModule } from 'src/document/document/document.module';
import { ChurchModule } from 'src/church/church.module';
import { Church } from 'src/church/entities/church.entity';
import { Background } from 'src/background/entities/background.entity';
import { Skill } from 'src/background/entities/skill.entity';
import { BackgroundModule } from 'src/background/background.module';
import { Address } from 'src/location/address/entities/address.entity';
import { AddressModule } from 'src/location/address/address.module';
import { Education } from 'src/background/entities/education.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Profile, Church, Skill, Address, Education]),
    UsersModule,
    DocumentModule,
    ChurchModule,
    BackgroundModule,
    AddressModule,
  ],
  controllers: [ProfileController],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
