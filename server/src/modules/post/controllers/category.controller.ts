import { Body, Controller, Delete, Get, Param, Post, Query, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import _ from "lodash";
import { CategoryEntity } from './../entities/category.entity';

@Controller("category")
export class CategoryController {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) { }

  @Get()
  public async getPosts() {
    return await this.categoryRepository.find();
  }

}
