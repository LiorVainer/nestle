import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UserService, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
