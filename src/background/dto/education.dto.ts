import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEducationDto {
  @ApiProperty()
  @IsString()
  school_level: string;

  @ApiProperty()
  @IsString()
  filed: string;
}
