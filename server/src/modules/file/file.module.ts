import { Module } from '@nestjs/common';
import { UploadController } from './controllers/upload.controller';
import { QiniuController } from './controllers/qiniu.contriller';
import { CommonService } from 'src/common/common.service';


@Module({
  imports: [],
  controllers: [UploadController, QiniuController],
  providers: [CommonService],
})
export class FileModule { }
