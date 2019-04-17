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
    const {pageSize, pageNumber} = query
    const result = await this.postRepository.findAndCount({
      relations: ["categories"], 
      skip: (pageNumber-1) * pageSize,
      take: pageSize,
    });
    return createResult({
      list: result[0],
      count: result[1],
    });
  }

  @Post()
  @UseGuards(LocalGuard)
  public async createPost(@Body() data: any) {
    return await this.postRepository.save(data);
  }

}
