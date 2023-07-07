import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from "@nestjs/common";
import { LocationdataService } from "./locationdata.service";
import { CreateLocationdataDto } from "./dto/create-locationdata.dto";
import { UpdateLocationdatumDto } from "./dto/update-locationdatum.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiBearerAuth()
@ApiTags("locationdata")
@Controller("locationdata")
export class LocationdataController {
  constructor(private readonly locationdataService: LocationdataService) {}

  @Post()
  create(@Body() createLocationdatumDto: CreateLocationdataDto) {
    return this.locationdataService.create(createLocationdatumDto);
  }

  @Get()
  findAll() {
    return this.locationdataService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", new ParseUUIDPipe()) id: string) {
    return this.locationdataService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id", new ParseUUIDPipe()) id: string,
    @Body() updateLocationdatumDto: UpdateLocationdatumDto
  ) {
    return this.locationdataService.update(+id, updateLocationdatumDto);
  }

  @Delete(":id")
  remove(@Param("id", new ParseUUIDPipe()) id: string) {
    return this.locationdataService.remove(+id);
  }
}
