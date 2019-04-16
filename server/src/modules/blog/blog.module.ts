import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import {
  PostEntity,
  CategoryEntity
} from "./entities";

import { PostController, CategoryController } from "./controllers"

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, CategoryEntity])],
  controllers: [
    PostController,
    CategoryController
  ],
  providers: [],
})
export class BlogModule { }
