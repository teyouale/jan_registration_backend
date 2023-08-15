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
  OneToMany,
} from 'typeorm';
import { Location } from 'src/location/address/entities/location.entity';
import { Address } from 'src/location/address/entities/address.entity';
import { Skill } from 'src/background/entities/skill.entity';
import { Education } from 'src/background/entities/education.entity';
import { Work } from 'src/background/entities/work.entity';
import { Church } from 'src/church/entities/church.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  title: string;

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

  @Column({ nullable: true })
  email: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  profile_picture_id: string;

  @Column({ nullable: true })
  photo_url: string;

  @Column({ nullable: true })
  passport_url: string;

  @Column({ nullable: true })
  card_url: string;

  @OneToOne(() => User, (user) => user.profile, {
    lazy: true,
  })
  user: User;

  @OneToOne(() => Church, {
    nullable: true,
    eager: true,
  })
  @JoinColumn()
  churches: Church;

  @OneToOne(() => Work, {
    eager: true,
  })
  @JoinColumn()
  works: Work;

  @OneToOne(() => Location, {
    eager: true,
  })
  @JoinColumn()
  location: Location;

  @OneToMany(() => Skill, (skill) => skill.profile, {
    eager: true,
  })
  @JoinColumn()
  skills: Skill[];

  @OneToMany(() => Education, (education) => education.profile, {
    eager: true,
    // cascade: true,
    // onUpdate: 'CASCADE',
    // onDelete: 'CASCADE',
  })
  @JoinColumn()
  education: Education[];

  @AfterInsert()
  logInsert() {}

  @AfterUpdate()
  logUpdate() {}

  @AfterRemove()
  logRemove() {}
}
