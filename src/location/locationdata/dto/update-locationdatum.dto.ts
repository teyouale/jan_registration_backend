import { PartialType } from '@nestjs/swagger';
import { CreateLocationdataDto } from "./create-locationdata.dto";

export class UpdateLocationdatumDto extends PartialType(
  CreateLocationdataDto
) {}
