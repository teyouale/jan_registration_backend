import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateWorkDto {
  @ApiProperty()
  @IsString()
  sector_of_work: string;

  @ApiProperty()
  @IsString()
  year_of_work: string;

  @ApiProperty()
  @IsString()
  license: string;
}
