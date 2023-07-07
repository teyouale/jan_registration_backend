/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ProfileService } from 'src/profile/profile.service';
// import { EmployeesService } from "src/schoolemployee/employees/employees.service";
// import { TeachersService } from "src/schoolemployee/teachers/teachers.service";
// import { StudentsService } from "src/student/students/students.service";
import { User } from 'src/users/entities/user.entity';
import { UserRoleType } from 'src/users/enums/user-role.enum';
import { UsersService } from 'src/users/users.service';
import { UserResponsePayload } from './dtos/response/user-response-payload.reponse.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService, // private teacherService: TeachersService, // private studentService: StudentsService, // private employeeService: EmployeesService
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findOne(username);
    //check pssword
    if (user && user.password === pass) {
      const { ...result } = user;

      return result;
    }
    return null;
  }

  async login(user: User) {
    let getMyBranches: any;

    switch (user.role) {
      case UserRoleType.FINANCE:
        // getMyBranches = await this.studentService.GetMyBranches(
        //   user?.profile?.id,
        // );
        break;
      case UserRoleType.USER:
        // getMyBranches = this.teacherService.GetMyBranches(user?.profile?.id);
        break;
      case UserRoleType.ADMININISTRATOR:
        break;
      case UserRoleType.SCHOOL_EMPLOYEE:
        break;
      case UserRoleType.SCHOOL_ADMININISTRATOR:
      case UserRoleType.BRANCH_ADMININISTRATOR:
        // getMyBranches = await this.employeeService.GetMyBranches(
        //   user?.profile?.id,
        // );
        break;
      default:
        throw new BadRequestException('Role is not found');
    }

    const payload: UserResponsePayload = {
      email: user.email,
      sub: user.id,
      role: user.role,
      pwdChangeRequired: user.pwd_change_required,
      id: user.id,
      emailChangeRequired: user.email_change_required,
    };

    return {
      data: {
        role: payload.role,
        email: payload.email,
        access_token: this.jwtService.sign(payload),
        pwdChangeRequired: payload.pwdChangeRequired,
        id: payload.id,
        emailChangeRequired: payload.emailChangeRequired,
        getMyBranches: getMyBranches,
      },
    };
  }

  async me(token: string) {
    const defaultReturnObject = { authenticated: false, user: null };
    const user = this.jwtService.verify(token);

    if (!user) {
      return {
        status: 400,
        postMessage: user,
      };
    }
    return { authenticated: true, user: user };
  }
}
