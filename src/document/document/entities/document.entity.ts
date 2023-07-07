import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Document {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  file_name: string;

  @Column()
  file_location: string;

  @Column()
  file_type: string;

  @Column()
  file_size: number;
}
