import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserRoleType } from 'src/users/enums/user-role.enum';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(phoneNumber: string, pass: string) {
    const user = await this.authService.validateUser(phoneNumber, pass);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
