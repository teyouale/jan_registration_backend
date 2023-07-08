import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { CreateLocaitonRequestDto } from './dto/create-location.request.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
import { Location } from './entities/location.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Location) private locationRepo: Repository<Location>,
    @InjectRepository(Address) private addressRepo: Repository<Address>,
  ) {}
  createLocation(mainBranchLocation: CreateLocaitonRequestDto) {
    const location = this.locationRepo.create(mainBranchLocation);

    return this.locationRepo.save(location);
  }
  create(createAddressDto: CreateAddressDto[]) {
    const addressArray = [];
    createAddressDto.forEach((x) => {
      const address = this.addressRepo.create(x);
      addressArray.push(address);
    });
    return addressArray;
  }

  findAll() {
    return `This action returns all address`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
  findAddressByReferenceId(referenceId: string) {
    return this.addressRepo.findBy({ referenceId });
  }
  findLocationById(id: string) {
    return this.locationRepo.findOneBy({ id });
  }
}
