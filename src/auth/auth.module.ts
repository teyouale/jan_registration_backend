import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
// import { TeachersModule } from "src/schoolemployee/teachers/teachers.module";
// import { StudentsModule } from "src/student/students/students.module";
// import { EmployeesModule } from "src/schoolemployee/employees/employees.module";

@Module({
  imports: [
    UsersModule,
    PassportModule,
    //TeachersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
    // StudentsModule,
    // EmployeesModule,
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
