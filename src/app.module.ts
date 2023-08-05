/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Profile } from './profile/entity/profile.entity';
import { User } from './users/entities/user.entity';
import { Location } from './location/address/entities/location.entity';
import { Address } from './location/address/entities/address.entity';
import { Document } from './document/document/entities/document.entity';
import { ProfileModule } from './profile/profile.module';
import { UsersModule } from './users/users.module';
import { DocumentModule } from './document/document/document.module';
import { LocationdataModule } from './location/locationdata/locationdata.module';
import { AddressModule } from './location/address/address.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { RequestModule } from './request/request.module';
import { Request } from './request/entities/request.entity';
import { ChurchModule } from './church/church.module';
import { BackgroundModule } from './background/background.module';
import { Church } from './church/entities/church.entity';
import { Work } from './background/entities/work.entity';
import { Skill } from './background/entities/skill.entity';
import { Education } from './background/entities/education.entity';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: '',
        auth: {
          user: '',
          pass: '',
        },
      },
    }),
    ConfigModule.forRoot(),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: +configService.get<number>('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        ssl: true,
        entities: [
          Profile,
          User,
          Document,
          Location,
          Address,
          Request,
          Church,
          Work,
          Skill,
          Education,
        ],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    ProfileModule,
    UsersModule,
    DocumentModule,
    LocationdataModule,
    AddressModule,
    RequestModule,
    ChurchModule,
    BackgroundModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
