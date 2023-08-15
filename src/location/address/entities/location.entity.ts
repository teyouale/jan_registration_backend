import { Profile } from 'src/profile/entity/profile.entity';
import {
  Column,
  Double,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @OneToOne(() => Profile, (profile) => profile.location, {
    // cascade: true,
    // onUpdate: 'CASCADE',
    // onDelete: 'CASCADE',
  })
  profile: Profile;
}
