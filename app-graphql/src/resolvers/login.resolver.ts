import {
  Args,
  Context,
  Field,
  Mutation,
  ObjectType,
  Resolver,
} from '@nestjs/graphql';
import { Response } from 'express';
import { LoginInput } from '../dto/login-input';
import { AuthService } from '../services/auth.service';

@ObjectType()
export class LoginResponse {
  @Field()
  token: string;
}

@Resolver()
export class LoginResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(
    @Args('input') input: LoginInput,
    @Context() context: { res: Response },
  ) {
    const token = await this.authService.login(input);
    context.res.setHeader('Authorization', `Bearer ${token}`);
    context.res.setHeader('Access-Control-Expose-Headers', 'Authorization');

    return {
      token,
    };
  }
}
