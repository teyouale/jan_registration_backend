import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsDefined,
  IsEnum,
  IsString,
  ValidateNested,
} from "class-validator";
import { AddressNameSpace } from "../enums/address.namespace.enum";
import { AddressType } from "../enums/address.type.enum";

export class IndividualAddressDto {
  @ApiProperty()
  @IsEnum(AddressType)
  type: AddressType;

  @ApiProperty()
  @IsString()
  vlaue: string;

  @ApiProperty()
  @IsBoolean()
  isPrimary: boolean;
}

export class CreateAddressDto {
  @ApiProperty()
  @IsString()
  referenceId: string;

  @ApiProperty()
  @IsEnum(AddressNameSpace)
  nameSpace: AddressNameSpace;

  @IsDefined()
  @IsArray()
  @ValidateNested()
  @Type(() => IndividualAddressDto)
  @ApiProperty({ type: [IndividualAddressDto] })
  @ValidateNested({})
  addresses: IndividualAddressDto[];
}
