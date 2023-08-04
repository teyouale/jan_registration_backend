import { Profile } from 'src/profile/entity/profile.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Work {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  sector_of_work: string;

  @Column({ nullable: true })
  year_of_work: string;

  @Column({ nullable: true })
  license: string;

  @OneToOne(() => Profile, (profile) => profile.works, { eager: true })
  @JoinColumn()
  profile: Profile;
}
