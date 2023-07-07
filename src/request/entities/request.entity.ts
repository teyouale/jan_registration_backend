import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Request {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  family: string;

  @Column()
  managerName: string;

  @Column()
  reason: string;

  @Column()
  roomType: string;

  @Column()
  date: string;

  @Column()
  time: string;
}
