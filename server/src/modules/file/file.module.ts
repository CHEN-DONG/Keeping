import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostEntity } from "../blog/entities/post.entity";
import { CategoryEntity } from "../blog/entities/category.entity";
import { UploadController } from './controllers/upload.controller';
import { CommonService } from 'src/common/common.service';


@Module({
  imports: [],
  controllers: [UploadController],
  providers: [CommonService],
})
export class FileModule { }
