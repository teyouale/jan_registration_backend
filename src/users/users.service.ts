import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { updatePasswordRequest } from './dto/update-password.request.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRoleType } from './enums/user-role.enum';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const check = await this.findOne(createUserDto.phoneNumber);
    if (check) {
      throw new BadRequestException('phone number {} already exists');
    }
    const user = this.repo.create(createUserDto);

    return this.repo.save(user);
  }

  async createBulk(createUserDtos: string[]) {
    const usersArray = [];
    createUserDtos.forEach((x) => {
      const users = this.repo.create({ phoneNumber: x });
      usersArray.push(users);
    });

    return this.repo.save(usersArray);
  }

  async UpdatePassword(updatePwdDto: updatePasswordRequest) {
    const user = await this.findById(updatePwdDto.id);
    if (!user) {
      throw new BadRequestException('Email doesnt exists');
    }

    user.email = updatePwdDto.email;
    user.email_change_required = false;
    user.password = updatePwdDto.password;
    user.pwd_change_required = false;
    this.repo.update({ id: user.id }, user);
    return user;
  }

  async createFromProfile(phoneNumber: string, role: UserRoleType) {
    var Is = false;

    if (!phoneNumber) {
      const crypto = require('crypto');
      phoneNumber = crypto.randomUUID();
    }

    const check = await this.findOne(phoneNumber);
    if (check) {
      throw new BadRequestException('Phone Number {} already exists');
    }

    var user = this.repo.create({
      phoneNumber,
      password: Math.random().toString(36).slice(-8),
      role,
      pwd_change_required: true,
    });

    // user.profile = profile;
    user = await this.repo.save(user);
    return user.phoneNumber;
  }

  findAll() {
    return this.repo.find();
  }

  findById(id: string) {
    return this.repo.findOneBy({ id });
  }
  findOne(phoneNumber: string) {
    return this.repo.findOneBy({ phoneNumber });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
