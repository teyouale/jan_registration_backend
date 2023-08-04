import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateChurchDto {
  @ApiProperty()
  @IsString()
  repent_father: string;

  @ApiProperty()
  @IsString()
  participate: string;

  @ApiProperty()
  @IsString()
  generation: string;

  @ApiProperty()
  @IsString()
  branch: string;
}
