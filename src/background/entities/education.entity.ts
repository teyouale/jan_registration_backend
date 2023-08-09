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

  @Column({ nullable: true })
  referenceId: string;

  @Column()
  type: string;

  @Column()
  value: string;

  @ManyToOne(() => Profile, (profile) => profile.education)
  @JoinColumn()
  profile: Profile;
}
