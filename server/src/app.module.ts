import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostController } from 'post/post.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'keeping',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    })
  ],
  controllers: [AppController, PostController],
  providers: [AppService],
})
export class AppModule { }
