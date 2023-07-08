import { Profile } from 'src/profile/entity/profile.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserRoleType } from '../enums/user-role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  pwd_change_required: boolean;

  @Column({ default: false })
  email_change_required: boolean;

  @Column({ default: false })
  email_confirmed: boolean;

  @Column({ default: false })
  phone_confirmed: boolean;

  @Column({ default: UserRoleType })
  role: UserRoleType;

  @OneToOne(() => Profile, (profile) => profile.user, { lazy: true })
  profile: Profile;
}
