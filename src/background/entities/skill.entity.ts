import { Profile } from 'src/profile/entity/profile.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  referenceId: string;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  value: string;

  @Column({ nullable: true })
  isPrimary: boolean;

  @ManyToOne(() => Profile, (profile) => profile.skills)
  profile: Profile;
}
