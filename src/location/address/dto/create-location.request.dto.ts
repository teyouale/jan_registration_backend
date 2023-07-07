import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateLocaitonRequestDto {
  @ApiProperty()
  @IsString()
  country: string;

  @ApiProperty()
  @IsString()
  region: string;

  @ApiProperty()
  @IsString()
  city: string;

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
