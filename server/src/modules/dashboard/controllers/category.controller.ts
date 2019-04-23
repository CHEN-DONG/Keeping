import { Body, Controller, Delete, Get, Param, Post, Query, Put, UseGuards, Req } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import _ from "lodash";
import { CategoryEntity } from "../../blog/entities/category.entity";
import { LocalGuard } from "../../../guards/local.guard";
import { createResult } from 'src/common/utils';
import { CommonService } from "src/common/common.service";
import { Request } from 'express';

@Controller("admin/category")
export class CategoryController {
	constructor(
		@InjectRepository(CategoryEntity)
		private readonly categoryRepository: Repository<CategoryEntity>,
		private readonly commonService: CommonService
	) { }

	@Get()
	@UseGuards(LocalGuard)
	public async getPost(@Query() query: any) {
		const result = await this.commonService.getListAndCount(CategoryEntity);
		return createResult(result);
	}

	@Get(':id')
	@UseGuards(LocalGuard)
	public async getPostDetail(@Param('id') id: any) {
		const result = await this.categoryRepository.findOne(id);
		return createResult(result);
	}

	@Post()
	@UseGuards(LocalGuard)
	public async createPost(@Body() data: any) {
		return await this.commonService.create(CategoryEntity, data);
	}

	@Put(':id')
	@UseGuards(LocalGuard)
	public async updatePost(@Param('id') id: any, @Body() data: any) {
		return await this.commonService.update(CategoryEntity, id, data);
	}

	@Delete(':id')
	@UseGuards(LocalGuard)
	public async deletePost(@Param('id') id: any) {
		return await this.commonService.update(CategoryEntity, id, { isDelete: true });
	}

}
