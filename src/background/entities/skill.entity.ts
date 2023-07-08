import { Profile } from 'src/profile/entity/profile.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  referenceId: string;

  @Column()
  type: string;

  @Column()
  value: string;

  @Column({ nullable: true })
  isPrimary: boolean;

  // @ManyToOne(() => Profile, (profile) => profile.skills)
  // profile: Profile;
}
