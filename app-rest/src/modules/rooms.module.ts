import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomEntity } from 'src/entities/room.entity';
import { RoomController } from '../controllers/roomController';
import { RoomService } from '../services/roomService';
import { AuthModule } from './auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity]), AuthModule],

  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomsModule {}
