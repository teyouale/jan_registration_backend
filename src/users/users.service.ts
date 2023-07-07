import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { updatePasswordRequest } from "./dto/update-password.request.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import { UserRoleType } from "./enums/user-role.enum";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const check = await this.findOne(createUserDto.email);
    if (check) {
      throw new BadRequestException("Email {} already exists");
    }
    const user = this.repo.create(createUserDto);

    return this.repo.save(user);
  }

  async UpdatePassword(updatePwdDto: updatePasswordRequest) {
    const user = await this.findById(updatePwdDto.id);
    if (!user) {
      throw new BadRequestException("Email doesnt exists");
    }

    user.email = updatePwdDto.email;
    user.email_change_required = false;
    user.password = updatePwdDto.password;
    user.pwd_change_required = false;
    this.repo.update({ id: user.id }, user);
    return user;
  }

  async createFromProfile(email: string, role: UserRoleType) {
    var isEmailChangeRequired = false;

    if (!email) {
      const crypto = require("crypto");
      email = crypto.randomUUID();
      isEmailChangeRequired = true;
    }

    const check = await this.findOne(email);
    if (check) {
      throw new BadRequestException("Email {} already exists");
    }

    var user = this.repo.create({
      email,
      password: Math.random().toString(36).slice(-8),
      role,
      pwd_change_required: true,
      email_change_required: isEmailChangeRequired,
    });

    // user.profile = profile;
    user = await this.repo.save(user);
    return user.email;
  }

  findAll() {
    return `This action returns all users`;
  }

  findById(id: string) {
    return this.repo.findOneBy({ id });
  }
  findOne(email: string) {
    return this.repo.findOneBy({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
