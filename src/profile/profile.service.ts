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
import { BackgroundService } from 'src/background/background.service';
import { AddressService } from 'src/location/address/address.service';
import { ChurchService } from 'src/church/church.service';
@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private repo: Repository<Profile>,
    private userService: UsersService,
    private backgroundService: BackgroundService,
    private churchServuce: ChurchService,
    private addressService: AddressService,
    private documentService: DocumentService,
  ) {}

  async create(
    phoneNumber: string,
    dto: NewProfileDto,
    file: Express.Multer.File = null,
  ) {
    console.log('create profile', phoneNumber);

    const user = await this.userService.findOne(phoneNumber);
    if (user) {
      const profile = this.repo.create(dto);
      // console.log(profile);

      profile.works = await this.backgroundService.createWork(dto.work);
      profile.education = await this.backgroundService.createProfession(
        dto.education,
      );

      const church = await this.churchServuce.create(dto.church);
      console.log(church);
      profile.location = await this.addressService.createLocation(dto.location);
      profile.churches = church;
      profile.skills = await this.backgroundService.createSkill(dto.skill);
      profile.user = user;
      

      const ppp = await this.repo.save(profile);
      console.log({ ppp });

      return ppp;
    } else
      throw new BadRequestException('User not found with this ', phoneNumber);
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

  async saveProfilePicture(id, photo_url) {
    const profile = await this.repo.findOne({ where: { id } });
    profile.photo_url = photo_url.photo;

    return this.repo.save(profile);
  }

  async savePassport(id, passport_url) {
    const profile = await this.repo.findOne({ where: { id } });
    profile.passport_url = passport_url.photo;

    return this.repo.save(profile);
  }

  async saveCard(id, card_url) {
    const profile = await this.repo.findOne({ where: { id } });
    profile.card_url = card_url.photo;

    return this.repo.save(profile);
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
