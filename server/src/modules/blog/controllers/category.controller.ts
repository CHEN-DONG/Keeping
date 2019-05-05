import { Body, Controller, Delete, Get, Param, Post, Query, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryEntity } from './../entities/category.entity';
import { CommonService } from "src/common/common.service";
import { createResult } from "src/common/utils";

@Controller("category")
export class CategoryController {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
    private readonly commonService: CommonService
  ) { }

  @Get()
	public async getCategory(@Query() query: any) {
		const result = await this.categoryRepository.find();
		return createResult(result);
	}

}
