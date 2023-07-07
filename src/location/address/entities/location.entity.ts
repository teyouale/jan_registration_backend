import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  country: string;

  @Column()
  region: string;

  @Column()
  city: string;

  @Column()
  specificLocation: string;

  @Column()
  lattitude: number;

  @Column()
  longtiude: number;
}
