import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSkillsDto {
  @ApiProperty()
  @IsString()
  referenceId: string;

  @ApiProperty()
  @IsString()
  langugaeSkill: [];

  @ApiProperty()
  @IsString()
  professionSkill: [];

  @ApiProperty()
  @IsString()
  isPrimary: string;
}
