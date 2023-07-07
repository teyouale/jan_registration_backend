import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserRoles {
  @PrimaryGeneratedColumn("uuid")
  id: string;
}
