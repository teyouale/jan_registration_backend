/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseInterceptors,
  UploadedFile,
  ParseUUIDPipe,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { NewProfileDto } from './dtos/new-profile.dto';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { ProfileService } from './profile.service';

@ApiBearerAuth()
@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Post('/new')
  newProfle(@Body() body: NewProfileDto) {
    this.profileService.create(body.email, body);
  }

  @Get()
  findAll() {
    return this.profileService.find();
  }

  @Post('/profilepicture/:profileId')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  ProfilePicture(
    @Param('profileId') profileId: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    this.profileService.createProfilePic(profileId, file);
  }

  @Get('/myprofile')
  getMyProfile(@Request() req) {
    const userId = req.user.userId;
    return this.profileService.findByUserId(userId);
  }

  @Get('/:id')
  findProfile(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.profileService.findOne(id);
  }

  @Delete('/:id')
  deleteProfile(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.profileService.remove(id);
  }

  // @Patch('/:id')
  // updateProfile(
  //   @Param('id', new ParseUUIDPipe()) id: string,
  //   @Body() dto: UpdateProfileDto,
  // ) {
  //   return this.profileService.update(id, dto);
  // }
}
