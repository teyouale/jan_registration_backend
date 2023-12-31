import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { AddressNameSpace } from '../enums/address.namespace.enum';
import { Profile } from 'src/profile/entity/profile.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  referenceId: string;

  @Column()
  type: string;

  @Column()
  value: string;

  @Column()
  isPrimary: boolean;

  // @ManyToOne(() => Profile, (profile) => profile.addresses)
  // profile: Profile;
}
