import { Module } from '@nestjs/common';
import { LoginResolver } from 'src/resolvers/login.resolver';
import { AuthGuard } from '../guards/auth.guard';
import { AuthService } from '../services/auth.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AuthService, AuthGuard, LoginResolver],
  exports: [AuthService, AuthGuard],
})
export class AuthModule {}
