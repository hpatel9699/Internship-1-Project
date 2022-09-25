import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { RegisterDTO } from 'src/user/register.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { ChangePasswordDTO, LoginDTO } from './login.dto';
import { GetUser } from '../../decorator/get-user.decorator';
import { User } from 'src/types/user';
import { Payload } from 'src/types/payload';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @Get('/check')
  @UseGuards(AuthGuard('jwt'))
  async hiddenInformation() {
    return 'Auth Working';
  }

  @Post('register')
  async register(@Body() registerDTO: RegisterDTO) {
    const user = await this.userService.create(registerDTO);
    const payload = {
      email: user.email,
    };

    const token = await this.authService.signPayload(payload);
    return { user, token };
  }
  @Post('login')
  async login(@Body() loginDTO: LoginDTO) {
    const user = await this.userService.findByLogin(loginDTO);
    const payload = {
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
  }

  @Post('change-password')
  @UseGuards(AuthGuard('jwt'))
  async changePassword(
    @Body() changePasswordDTO: ChangePasswordDTO,
    @GetUser() user: Payload,
  ) {
    return await this.userService.changePassword(changePasswordDTO, user);
  }
}
