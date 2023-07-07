import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsPhoneNumber,
  IsNotEmpty,
  IsEnum,
  IsDefined,
} from 'class-validator';
// import { BulkStudentList } from 'src/student/manage-students/dto/bulk-insert-students.request.dto';
import { Gender } from '../enums/profile-gender.enum';
import { MarriageStatus } from '../enums/profile-marriagestatus.enum';
import { Title } from '../enums/profile-title.enum';

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
  @IsString()
  phoneNumber: string;
}
