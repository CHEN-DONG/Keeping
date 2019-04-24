import { Module } from '@nestjs/common';
import { PostController } from './controllers/post.controller';
import { CategoryController } from './controllers/category.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostEntity } from "../blog/entities/post.entity";
import { CategoryEntity } from "../blog/entities/category.entity";
import { CommonService } from 'src/common/common.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([PostEntity, CategoryEntity])
  ],
  controllers: [PostController, CategoryController],
  providers: [CommonService],
})
export class DashboardModule { }
