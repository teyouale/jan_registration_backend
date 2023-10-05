import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class NewGenerateCodeDto {
  @ApiProperty()
  @IsString()
  uniqueNumber: number;

  @ApiProperty()
  @IsString()
  profile: string;
}
