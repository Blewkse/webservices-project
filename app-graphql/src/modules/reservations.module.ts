// filepath: c:\Users\Hugo\Documents\Code\eval-webs-jules-hugo\eval-webservices\src\rest\modules\reservations.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationResolver } from 'src/resolvers/reservation.resolver';
import { ReservationsEntity } from '../entities/reservation.entity';
import { AuthModule } from './auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationsEntity]), AuthModule],
  controllers: [],
  providers: [ReservationResolver],
})
export class ReservationsModule {}
