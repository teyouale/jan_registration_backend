import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString } from 'class-validator';

export class NewassignFamDto {
  @ApiProperty()
  @IsString()
  family: string;

  @ApiProperty()
  @IsString()
  profile: string;
}
