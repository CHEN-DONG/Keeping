import { Body, Controller, Delete, Get, Param, Post, Query, Put, UseGuards, Req } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import _ from "lodash";
import { CategoryEntity } from "../../blog/entities/category.entity";
import { LocalGuard } from "../../../guards/local.guard";
import { createResult } from 'src/common/utils';
import { CommonService } from "src/common/common.service";

@Controller("admin/category")
export class CategoryController {
	constructor(
		@InjectRepository(CategoryEntity)
		private readonly categoryRepository: Repository<CategoryEntity>,
		private readonly commonService: CommonService
	) { }

	@Get()
	@UseGuards(LocalGuard)
	public async getCategory(@Query() query: any) {
		const result = await this.commonService.getListAndCount(CategoryEntity);
		return createResult(result);
	}

	@Get(':id')
	@UseGuards(LocalGuard)
	public async getCategoryDetail(@Param('id') id: any) {
		const result = await this.categoryRepository.findOne(id);
		return createResult(result);
	}

	@Post()
	@UseGuards(LocalGuard)
	public async createCategory(@Body() data: any) {
		return await this.commonService.create(CategoryEntity, data);
	}

	@Put(':id')
	@UseGuards(LocalGuard)
	public async updateCategory(@Param('id') id: any, @Body() data: any) {
		return await this.commonService.update(CategoryEntity, id, data);
	}

	@Delete(':id')
	@UseGuards(LocalGuard)
	public async deleteCategory(@Param('id') id: any) {
		return await this.commonService.delete(CategoryEntity, id);
	}
}
