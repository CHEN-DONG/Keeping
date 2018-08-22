import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreatePostDto } from './create-post.dto';

@Controller('post')
export class PostController {
    @Get()
    findAll() {
        return [];
    }

    @Post()
    async create(@Body() createPostDto: CreatePostDto) {

    }

}
