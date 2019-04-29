import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import {
  PostEntity,
  CategoryEntity
} from "./entities";

import { PostController, CategoryController } from "./controllers"
import { CommonService } from "src/common/common.service";

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, CategoryEntity])],
  controllers: [
    PostController,
    CategoryController
  ],
  providers: [CommonService],
})
export class BlogModule { }
