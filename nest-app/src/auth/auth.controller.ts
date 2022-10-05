import { Body, Controller, Post } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public login(@Body() body: Pick<User, 'email' | 'password'>) {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  public register(@Body() body: Omit<User, 'id'>) {
    return this.authService.register(body);
  }
}
