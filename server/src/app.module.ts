import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { ConfigService } from './services/config.service';

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
      synchronize: true
    }),
    TypeOrmModule.forFeature([Post])
  ],
  controllers: [PostController],
  providers: [PostService, ConfigService],
})
export class AppModule {

}
