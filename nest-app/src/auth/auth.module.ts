import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { FirebaseService } from 'src/firebase/firebase.service';

@Module({
  imports: [ConfigModule],
  controllers: [AuthController],
  providers: [AuthService, FirebaseService],
})
export class AuthModule {}
