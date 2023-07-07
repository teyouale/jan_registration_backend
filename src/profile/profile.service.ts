/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entity/profile.entity';
import { NewProfileDto } from './dtos/new-profile.dto';
import { UsersService } from 'src/users/users.service';
import { DocumentService } from 'src/document/document/document.service';
@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private repo: Repository<Profile>,
    private userService: UsersService,
    private documentService: DocumentService,
  ) {}

  async create(
    email: string,
    dto: NewProfileDto,
    file: Express.Multer.File = null,
  ) {
    const user = await this.userService.findOne(email);
    if (user) {
      const profile = this.repo.create(dto);
      profile.user = user;

      return this.repo.save(profile);
    }

    throw new BadRequestException('No user');
  }

  async createProfilePic(profileId: string, file: Express.Multer.File) {
    const profile = await this.repo.findOneBy({ id: profileId });
    if (profile) {
      if (file) {
        const docId = await this.documentService.create(file);
        profile.profile_picture_id = docId;

        this.repo.update({ id: profileId }, profile);
      }
    }
  }

  async findByUserId(userId: string) {
    const user = await this.userService.findById(userId);

    //FIXME: check this one later
    if (user) {
      const profile = await this.repo.findOneBy({ id: user?.profile?.id });
      const tt = { ...profile };
      return tt;
    }

    throw new BadRequestException();
  }
  async findOne(id: string) {
    const profile = await this.repo.findOneBy({ id });
    if (profile.profile_picture_id) {
      profile.profile_picture_id = await this.documentService.findOne(
        profile.profile_picture_id,
      );
    }
    return profile;
  }

  find() {
    return this.repo.find();
  }

  async update(id: string, attrs: Partial<Profile>) {
    const profile = await this.findOne(id);

    if (!profile) {
      throw new NotFoundException('profile not found');
    }

    Object.assign(profile, attrs);
    return this.repo.save(profile);
  }

  async remove(id: string) {
    const profile = await this.findOne(id);

    if (!profile) {
      throw new NotFoundException('profile not found');
    }

    return this.repo.remove(profile);
  }
}
