import { Module } from '@nestjs/common';
import { PostController } from './controllers/post.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostEntity } from "../blog/entities/post.entity";
import { CategoryEntity } from "../blog/entities/category.entity";


@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity, CategoryEntity])
  ],
  controllers: [PostController],
  providers: [],
})
export class DashboardModule { }
