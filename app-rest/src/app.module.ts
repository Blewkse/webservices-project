import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationsEntity } from './entities/reservation.entity';
import { RoomEntity } from './entities/room.entity';
import { UserEntity } from './entities/user.entity';
import { AuthModule } from './modules/auth.module';
import { ReservationsModule } from './modules/reservations.module';
import { RoomsModule } from './modules/rooms.module';
import { UsersModule } from './modules/users.module';

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
    AuthModule,
    ReservationsModule,
    RoomsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
