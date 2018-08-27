import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "../entities/post.entity";
import { postStatus } from "../enums/post-status-enum";

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) { }

  findAll(): Promise<[Post[], number]> {
    return this.postRepository.findAndCount({
      where: { isDelete: false }
    });
  }

  create(post): Promise<Post> {
    this.postRepository.merge(post, { status: postStatus.Sumbit })
    return this.postRepository.save(post);
  }

  async update(post): Promise<Post> {
    await this.postRepository.update(post.id, post);
    return await this.findById(post.id);
  }

  async findById(id: number): Promise<Post> {
    return this.postRepository.findOne(id);
  }

}