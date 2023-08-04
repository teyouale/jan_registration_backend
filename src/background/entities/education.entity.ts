import { Profile } from 'src/profile/entity/profile.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Education {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  referenceId: string;

  @Column()
  school_level: string;

  @Column()
  filed: string;

  @ManyToOne(() => Profile, (profile) => profile.education)
  @JoinColumn()
  profile: Profile;
}
