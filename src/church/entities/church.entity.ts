import { Profile } from 'src/profile/entity/profile.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Church {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  repent_father: string;

  @Column()
  participate: string;

  @Column({ nullable: true })
  participateBy: string;

  // @OneToOne(() => Profile, (profile) => profile.churches)
  // profile: Profile;
}
