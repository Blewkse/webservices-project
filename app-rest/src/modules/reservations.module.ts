// filepath: c:\Users\Hugo\Documents\Code\eval-webs-jules-hugo\eval-webservices\src\rest\modules\reservations.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationsEntity } from 'src/entities/reservation.entity';
import { ReservationController } from '../controllers/reservationController';
import { ReservationService } from '../services/reservationServices';
import { AuthModule } from './auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([ReservationsEntity]), AuthModule],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationsModule {}
