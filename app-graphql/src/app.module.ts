import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ReservationsEntity } from './entities/reservation.entity';
import { RoomEntity } from './entities/room.entity';
import { UserEntity } from './entities/user.entity';
import { AuthModule } from './modules/auth.module';
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
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
      context: ({ req, res }: { req: Request; res: Response }) => ({
        req,
        res,
      }),
    }),
    TypeOrmModule.forFeature([UserEntity, RoomEntity, ReservationsEntity]), //mettre les entities
    AuthModule,
    RoomsModule,
    ReservationsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
