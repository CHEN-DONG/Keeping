import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DATABASE_CONFIG } from './configs/database.config'
import { PostModule } from './modules/post/post.module';
import { AuthModule } from './modules/authentication/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DATABASE_CONFIG),
    PostModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
