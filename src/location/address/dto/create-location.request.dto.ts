import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateLocaitonRequestDto {
  @ApiProperty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  subCity: string;

  @ApiProperty()
  @IsString()
  wereda: string;

  @ApiProperty()
  @IsString()
  churchs: string;

  @ApiProperty()
  @IsString()
  specificLocation: string;

  @ApiProperty()
  @IsString()
  lattitude: number;

  @ApiProperty()
  @IsString()
  longtiude: number;
}
