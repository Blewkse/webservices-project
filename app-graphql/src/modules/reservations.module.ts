// filepath: c:\Users\Hugo\Documents\Code\eval-webs-jules-hugo\eval-webservices\src\rest\modules\reservations.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationResolver } from 'src/resolvers/reservation.resolver';
import { ReservationsEntity } from '../entities/reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationsEntity])],
  controllers: [ReservationResolver],
  providers: [],
})
export class ReservationsModule {}
