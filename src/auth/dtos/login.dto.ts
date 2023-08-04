import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { UserRoleType } from 'src/users/enums/user-role.enum';

export class Login {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  password: string;

  @ApiProperty()
  @IsEnum(UserRoleType)
  role: UserRoleType;
}
