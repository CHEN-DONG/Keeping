import { Controller, Get, Post, Body, Put, Delete, Param } from "@nestjs/common";
import { PostService } from "../services/post.service";
import { PostCreateDto } from "../dtos/post-create.dto";
import { UtilService } from "../services/util.service";


@Controller('post')
export class PostController {
  constructor(
    private readonly postServeice: PostService,
    private readonly util: UtilService
  ) { }

  @Get()
  async findAll() {
    const result = await this.postServeice.findAll();
    return this.util.createResult({ data: result[0], count: result[1] });
  }

  @Post()
  async create(@Body() postCreateDto: PostCreateDto) {
    const result = await this.postServeice.create(postCreateDto);
    return this.util.createResult({ data: result });
  }

  @Put()
  async update(@Body() postCreateDto: PostCreateDto) {
    const result = await this.postServeice.update(postCreateDto);
    return this.util.createResult({ data: result });
  }

  @Delete(':id')
  async delete(@Param() params) {
    return this.postServeice.update({ id: params.id, isDelete: true })
  }

}