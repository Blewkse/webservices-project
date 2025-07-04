import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ReservationsEntity } from './entities/reservation.entity';
import { RoomEntity } from './entities/room.entity';
import { UserEntity } from './entities/user.entity';
import { ReservationsModule } from './modules/reservations.module';
import { RoomsModule } from './modules/rooms.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'pguser',
      password: 'pgpass',
      database: 'pgdb',
      entities: [UserEntity, RoomEntity, ReservationsEntity], //mettre les entities
      synchronize: true, // false si vous avez déjà les tables
    }),
    ReservationsModule,
    RoomsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
