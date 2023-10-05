// user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class GenerateCode {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ unique: true })
  uniqueNumber: number;

  @OneToOne(() => Profile, (profile) => profile.generatecode)
  profile: Profile;
}
