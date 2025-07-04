import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RoomEntity } from './room.entity';
import { UserEntity } from './user.entity'; // Assurez-vous que le chemin est correct

@Entity('reservations')
export class ReservationsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column()
  user_id: string;

  @ManyToOne(() => RoomEntity, (room) => room.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'room_id' })
  room: RoomEntity;

  @Column()
  room_id: string;

  @CreateDateColumn()
  start_time: Date;

  @CreateDateColumn()
  end_time: Date;

  @Column()
  status: string;

  @CreateDateColumn()
  created_at: Date;
}
