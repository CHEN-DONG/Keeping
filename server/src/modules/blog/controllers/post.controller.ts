import { Body, Controller, Delete, Get, Param, Post, Query, Put, UseGuards, ParseIntPipe, Request } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import _ from "lodash";
import { PostEntity } from "../entities/post.entity";
import { POST_SEARCH_TYPE } from "../../../enums/post-search-type.enum";
import { createResult } from 'src/common/utils';
import { CommonService } from "src/common/common.service";

@Controller("post")
export class PostController {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
    private readonly commonService: CommonService
  ) { }

  @Get('search')
	public async searchPost(@Query('type') type: POST_SEARCH_TYPE, @Query('query') query: any, @Request() request: any) {
    const { pageSize = 10, pageNumber = 1 } = request.query;
    let where = "";
    let whereQuery = {};
    if(type === POST_SEARCH_TYPE.CATEGORY){
      where = "category.id = :id";
      whereQuery = {id: query};
    }
    if(type === POST_SEARCH_TYPE.ALL){
      where = "post.title LIKE :title OR post.content LIKE :content";
      whereQuery = {title: `%${query}%`, content: `%${query}%`};
    }
    return await this.postRepository
    .createQueryBuilder('post')
    .leftJoinAndSelect('post.categories', 'category')
    .where(where ,whereQuery)
    .skip((pageNumber - 1) * pageSize)
    .take(pageSize)
    .getMany();
	}

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
