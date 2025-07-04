import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { AuthGuard } from '../guard/auth.guard';
import { AuthService } from '../services/auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard],
  exports: [AuthService, AuthGuard],
})
export class AuthModule {}
