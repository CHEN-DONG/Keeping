import { Body, Controller, Delete, Get, Param, Post, Query, Put, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import _ from "lodash";
import { PostEntity } from "../entities/post.entity";
import { LocalGuard } from "../../../guards/local.guard";
import { createResult } from 'src/common/utils';
import { CommonService } from "src/common/common.service";

@Controller("post")
export class PostController {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
    private readonly commonService: CommonService
  ) { }

  @Get()
  public async getPost(@Query() query: any) {
    const result = await this.commonService.getListAndCount(PostEntity, {
			relations: ["categories"],
		});
		return createResult(result);
  }

  @Get(':id')
	public async getPostDetail(@Param('id') id: any) {
		const result = await this.postRepository.findOne(id, {
			relations: ["categories"],
		});
		return createResult(result);
	}
}
