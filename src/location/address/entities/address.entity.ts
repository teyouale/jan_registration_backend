import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AddressNameSpace } from "../enums/address.namespace.enum";

@Entity()
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  referenceId: string;

  @Column()
  nameSpace: AddressNameSpace;

  @Column()
  type: string;

  @Column()
  value: string;

  @Column()
  isPrimary: boolean;
}
