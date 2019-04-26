import { Body, Controller, Delete, Get, Param, Post, Query, Put, UseGuards, Req, UseInterceptors, UploadedFile } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import _ from "lodash";
import { LocalGuard } from "../../../guards/local.guard";
import { createResult } from 'src/common/utils';
import { CommonService } from "src/common/common.service";
import { Request } from 'express';
import { FileInterceptor } from '@nestjs/platform-express'
import { APP_CONFIG } from '../../../configs/app.config';
import * as multer from 'multer';
import { join } from 'path';

@Controller("upload")
export class UploadController {
	constructor(
		private readonly commonService: CommonService
	) { }

	@Post()
	@UseInterceptors(FileInterceptor('file', {
		storage: multer.diskStorage({
			destination: (req, file, cb) => {
				console.log(req.file)
				cb(null, `./${APP_CONFIG.uploadImagePath}`);
			},
			filename: (req, file, cb) => {
				cb(null, file.originalname);
			},
		}),
	}))
	async uploade(@UploadedFile() file) {
		file.path = `${APP_CONFIG.appHost}/${file.path}`;
		return file;
	}
}
