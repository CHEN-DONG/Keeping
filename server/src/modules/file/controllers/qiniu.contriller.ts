import { Body, Controller, Delete, Get, Param, Post, Query, Put, UseGuards, Req, UseInterceptors, UploadedFile, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Response } from 'express';
import * as qiniu from "qiniu";
import { CommonService } from "src/common/common.service";
import { APP_CONFIG } from '../../../configs/app.config';
import { createResult } from "src/common/utils";

const bucket = APP_CONFIG.qiniuBucket;
const accessKey = APP_CONFIG.qiniuAccessKey;
const secretKey = APP_CONFIG.qiniuSecretKey;
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const options = {
  scope: bucket,
  mimeLimit: 'image/*'
};
const putPolicy = new qiniu.rs.PutPolicy(options);
const config = new qiniu.conf.Config();
config['zone'] = qiniu.zone.Zone_z1;
const uploadToken = putPolicy.uploadToken(mac);

@Controller("qiniu")
export class QiniuController {
  constructor(
    private readonly commonService: CommonService
  ) { }

  @Post()
  upload(@Res() res: Response) {
    var localFile =`${process.cwd()}/public/images/Group9.png`;
    var formUploader = new qiniu.form_up.FormUploader(config);
    var putExtra = new qiniu.form_up.PutExtra();
    formUploader.putFile(uploadToken, null, localFile, putExtra, function (respErr,
      respBody, respInfo) {
      if (respErr) {
        throw respErr;
      }
      if (respInfo.statusCode == 200) {
        const { key } = respBody;
        res.send(createResult(key));
      } else {
        console.log(respInfo.statusCode);
        console.log(respBody);
        res.send(createResult(respBody,respInfo.statusCode));
      }
    });
  }
}
