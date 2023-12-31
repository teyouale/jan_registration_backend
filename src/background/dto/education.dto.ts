import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEducationDto {
  @ApiProperty()
  @IsString()
  referenceId: string;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  value: string;
}
