import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsPhoneNumber,
  IsNotEmpty,
  IsEnum,
  IsDefined,
  IsObject,
  IsArray,
  ValidateNested,
} from 'class-validator';
// import { BulkStudentList } from 'src/student/manage-students/dto/bulk-insert-students.request.dto';
import { Gender } from '../enums/profile-gender.enum';
import { MarriageStatus } from '../enums/profile-marriagestatus.enum';
import { Title } from '../enums/profile-title.enum';
import { CreateLocaitonRequestDto } from 'src/location/address/dto/create-location.request.dto';
import { CreateChurchDto } from 'src/church/dto/create-church.dto';
import { CreateEducationDto } from 'src/background/dto/education.dto';
import { Type } from 'class-transformer';
import { CreateSkillsDto } from 'src/background/dto/skill.dto';
import { CreateWorkDto } from 'src/background/dto/work.dto';
import { CreateAddressDto } from 'src/location/address/dto/create-address.dto';

export class NewProfileDto {
  // constructor(studnet?: BulkStudentList) {
  //   if (studnet) {
  //     this.firstName = studnet.firstName;
  //     this.middleName = studnet.middleName;
  //     this.lastName = studnet.lastName;
  //     this.mothersFullName = studnet.mothersFullName;
  //     this.gender = studnet.gender;
  //     this.marriageStatus = studnet.marriageStatus;
  //     this.phoneNumber = studnet.phoneNumber;
  //   }
  //}
  // constructor() {}

  @ApiProperty()
  @IsString()
  @IsDefined()
  email: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  title: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  firstName: string;

  @ApiProperty()
  @IsString()
  middleName: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty()
  baptistName: string;

  @ApiProperty()
  birthDate: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  kids: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  marriageStatus: string;

  @ApiProperty()
  profile_picture_id: string;

  @ApiProperty()
  photo_url: string;

  @ApiProperty()
  passport_url: string;

  @ApiProperty()
  card_url: string;

  @ApiProperty()
  @IsDefined()
  @IsArray()
  @ValidateNested()
  @Type(() => CreateEducationDto)
  @ApiProperty({ type: [CreateEducationDto] })
  @ValidateNested({})
  education: CreateEducationDto[];

  @ApiProperty()
  @IsDefined()
  @IsArray()
  @ValidateNested()
  @Type(() => CreateSkillsDto)
  @ApiProperty({ type: [CreateSkillsDto] })
  @ValidateNested({})
  skill: CreateSkillsDto;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  work: CreateWorkDto;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  church: CreateChurchDto;

  @ApiProperty()
  @IsObject()
  @IsNotEmpty()
  location: CreateLocaitonRequestDto;
}
