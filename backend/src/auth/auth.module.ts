import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  imports: [UserModule],
  providers: [AuthService, JwtStrategy, FacebookStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
