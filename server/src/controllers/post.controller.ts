import { Controller, Get } from "@nestjs/common";
import { ConfigService } from "../services/config.service";
import { PostService } from "../services/post.service";


@Controller()
export class PostController {
    constructor(
        private readonly postServeice: PostService,
        private readonly config: ConfigService
    ) { }

    @Get()
    async findAll() {
        console.log(this.config.get('TEST'));
        return this.postServeice.findAll();
    }
}