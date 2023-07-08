import { Column, Double, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  subCity: string;

  @Column()
  wereda: string;

  @Column()
  churchs: string;

  @Column({ nullable: true })
  specificLocation: string;
}
