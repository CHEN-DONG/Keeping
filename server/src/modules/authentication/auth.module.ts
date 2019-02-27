import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService, JwtStrategy, LocalStrategy, PassportSerializerService } from './services/index'
import { UserEntity } from '../dashboard/entities/user.entity';
import { RoleEntity } from '../dashboard/entities/role.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    PassportModule.register({}),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([UserEntity, RoleEntity])
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy, PassportSerializerService],
})
export class AuthModule { }
