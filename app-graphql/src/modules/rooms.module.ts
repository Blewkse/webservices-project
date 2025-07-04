import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomEntity } from 'src/entities/room.entity';
import { RoomResolver } from 'src/resolvers/room.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([RoomEntity])],

  controllers: [RoomResolver],
  providers: [],
})
export class RoomsModule {}
