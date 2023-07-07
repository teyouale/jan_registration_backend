import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Address } from "./entities/address.entity";
import { Location } from "./entities/location.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Address]),
    TypeOrmModule.forFeature([Location]),
  ],
  controllers: [AddressController],
  providers: [AddressService],
  exports: [AddressService],
})
export class AddressModule {}
