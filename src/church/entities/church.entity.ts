import { Profile } from 'src/profile/entity/profile.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Church {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  repent_father: string;

  @Column({ nullable: true })
  participate: string;

  @Column()
  generation: string;

  @Column()
  branch: string;

  @OneToOne(() => Profile, (profile) => profile.churches)
  @JoinColumn()
  profile: Profile;
}
