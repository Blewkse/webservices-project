/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

type UserLoginPayload = {
  email: string;
  password: string;
};

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('loginByClientPortal')
  loginByClientPortal(@Req() req: Request, @Res() res: Response) {
    console.log('login');
    return this.authService.loginByClientPortal(res);
  }
  @Post('login')
  async login(@Body() payload: UserLoginPayload) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const token = await this.authService.login(payload);

      if (!token) {
        // Gestion des erreurs retournées par Keycloak
        throw new UnauthorizedException('Invalid credentials');
      }
      return token;
    } catch (error) {
      // Gestion des erreurs inattendues
      if (
        error instanceof UnauthorizedException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      console.error('Login error:', error);
      throw new InternalServerErrorException('Internal server error');
    }
  }

  @Get('callback')
  callback(@Req() req: Request, @Res() res: Response) {
    console.log('callback');
    return this.authService.callback(req, res);
  }

  @Get('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    return this.authService.logout(req, res);
  }
}
