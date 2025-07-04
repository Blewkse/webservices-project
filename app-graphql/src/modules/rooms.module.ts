import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomEntity } from 'src/entities/room.entity';
import { RoomResolver } from 'src/resolvers/room.resolver';
import { AuthModule } from './auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity]), AuthModule],

  controllers: [],
  providers: [RoomResolver],
})
export class RoomsModule {}
