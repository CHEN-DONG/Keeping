import { Body, Controller, Delete, Get, Param, Post, Query, Put, UseGuards, Req } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import _ from "lodash";
import { PostEntity } from "../../blog/entities/post.entity";
import { LocalGuard } from "../../../guards/local.guard";
import { createResult } from 'src/common/utils';
import { CommonService } from "src/common/common.service";
import { Request } from 'express';

@Controller("admin/post")
export class PostController {
	constructor(
		@InjectRepository(PostEntity)
		private readonly postRepository: Repository<PostEntity>,
		private readonly commonService: CommonService
	) { }

	@Get()
	@UseGuards(LocalGuard)
	public async getPost(@Query() query: any) {
		const result = await this.commonService.getListAndCount(PostEntity, {
			relations: ["categories"],
		});
		return createResult(result);
	}

	@Get(':id')
	@UseGuards(LocalGuard)
	public async getPostDetail(@Param('id') id: any) {
		const result = await this.postRepository.findOne(id, {
			relations: ["categories"],
		});
		return createResult(result);
	}

	@Post()
	@UseGuards(LocalGuard)
	public async createPost(@Body() data: any,  @Req() request: Request) {
		return await this.commonService.create(PostEntity, data);
	}

	@Put(':id')
	@UseGuards(LocalGuard)
	public async updatePost(@Param('id') id: any, @Body() data: any) {
		return await this.commonService.update(PostEntity, id, data);
	}

	@Delete(':id')
	@UseGuards(LocalGuard)
	public async deletePost(@Param('id') id: any) {
		return await this.commonService.update(PostEntity, id, { isDelete: true });
	}

}
