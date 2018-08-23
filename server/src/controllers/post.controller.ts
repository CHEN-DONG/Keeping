import { Controller, Get } from "@nestjs/common";
import { PostService } from "services/post.service";

@Controller()
export class PostController {
    constructor(private readonly postServeice: PostService) { }

    @Get()
    async findAll() {
        return this.postServeice.findAll();
    }
}