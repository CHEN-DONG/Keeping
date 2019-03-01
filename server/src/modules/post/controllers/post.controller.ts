import { Body, Controller, Delete, Get, Param, Post, Query, Put, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import _ from "lodash";
import { PostEntity } from "../entities/post.entity";
import { LocalGuard } from "../../../guards/local.guard"

@Controller("post")
export class PostController {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) { }

  @Get()
  @UseGuards(LocalGuard)
  public async getPosts() {
    return await this.postRepository.find({ relations: ["categories"] });
  }

  @Post()
  @UseGuards(LocalGuard)
  public async createPosts(@Body() data: any) {
    return await this.postRepository.save(data);
  }

}
