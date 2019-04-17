import { Body, Controller, Delete, Get, Param, Post, Query, Put, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import _ from "lodash";
import { PostEntity } from "../entities/post.entity";
import { LocalGuard } from "../../../guards/local.guard";
import { createResult } from 'src/common/utils';

@Controller("post")
export class PostController {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) { }

  @Get()
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
}
