import { Body, Controller, Delete, Get, Param, Post, Query, Put, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import _ from "lodash";
import { PostEntity } from "../../blog/entities/post.entity";
import { LocalGuard } from "../../../guards/local.guard";
import { createResult } from 'src/common/utils';

@Controller("admin/post")
export class PostController {
	constructor(
		@InjectRepository(PostEntity)
		private readonly postRepository: Repository<PostEntity>,
	) { }

	@Get()
	@UseGuards(LocalGuard)
	public async getPost(@Query() query: any) {
		const { pageSize, pageNumber } = query
		const result = await this.postRepository.findAndCount({
			where: {
				isDelete: false,
			},
			relations: ["categories"],
			skip: (pageNumber - 1) * pageSize,
			take: pageSize,
		});
		return createResult({
			list: result[0],
			count: result[1],
		});
	}

	@Get(':id')
	@UseGuards(LocalGuard)
	public async getPostDetail(@Param('id') id: any) {
		const result = await this.postRepository.findOne(id);
		return createResult(result);
	}

	@Post()
	@UseGuards(LocalGuard)
	public async createPost(@Body() data: any) {
		return await this.postRepository.save(data);
	}

	@Put(':id')
	@UseGuards(LocalGuard)
	public async updatePost(@Param('id') id: any, @Body() data: any) {
		return await this.postRepository.update(id, data);
	}

	@Delete(':id')
	@UseGuards(LocalGuard)
	public async deletePost(@Param('id') id: any) {
		return await this.postRepository.update(id, { isDelete: true });
	}

}
