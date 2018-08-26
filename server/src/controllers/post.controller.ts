import { Controller, Get, Post, Body } from "@nestjs/common";
import { ConfigService } from "../services/config.service";
import { PostService } from "../services/post.service";
import { PostCreateDto } from "../dtos/post-create.dto";


@Controller()
export class PostController {
    constructor(
        private readonly postServeice: PostService,
        private readonly config: ConfigService
    ) { }

    @Get()
    async findAll() {
        return this.postServeice.findAll();
    }

    @Post()
    async create(@Body() postCreateDto: PostCreateDto) {
      
    }
}