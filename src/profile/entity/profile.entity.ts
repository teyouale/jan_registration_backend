import { User } from 'src/users/entities/user.entity';
import { Document } from 'src/document/document/entities/document.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Title } from '../enums/profile-title.enum';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, (user) => user.profile, { lazy: true })
  user: User;

  @Column({ nullable: true })
  userId: number;

  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  baptistName: string;

  @Column({ nullable: true })
  birthDate: string;

  @Column()
  gender: string;

  @Column()
  marriageStatus: string;

  @Column()
  kids: string;

  @Column()
  subCity: string;

  @Column()
  city: string;

  @Column()
  wereda: string;

  @Column()
  church: string;

  @Column()
  graduate: string;

  @Column({ nullable: true })
  course: string;

  @Column({ nullable: true })
  certificate: string;

  @Column({ nullable: true })
  language: string;

  @Column({ nullable: true })
  participation: string;

  @Column({ nullable: true })
  whichWay: string;

  @Column({ nullable: true })
  expireance: string;

  @Column({ nullable: true })
  skill: string;

  @Column()
  family: string;

  // @Column({ default: 0 })
  // title: Title;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  profile_picture_id: string;

  @AfterInsert()
  logInsert() {}

  @AfterUpdate()
  logUpdate() {}

  @AfterRemove()
  logRemove() {}
}
