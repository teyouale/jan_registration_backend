import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { Profile } from './entity/profile.entity';
import { UsersModule } from 'src/users/users.module';
import { DocumentModule } from 'src/document/document/document.module';

@Module({
  imports: [TypeOrmModule.forFeature([Profile]), UsersModule, DocumentModule],
  controllers: [ProfileController],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
