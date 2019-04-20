import { Injectable , Inject  } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { REQUEST } from '@nestjs/core';
import { EntityManager } from "typeorm";
import { Request } from 'express';

@Injectable()
export class CommonService {
	constructor(
		@InjectEntityManager()
		private readonly entityManager: EntityManager,
		@Inject(REQUEST) private readonly request: Request
	) { }

	async create(entity: any, data: any) {
		data.createDate = new Date();
		data.updateDate = new Date();
		data.createrId = this.request.user ? this.request.user.id : 0;
		return await this.entityManager.insert(entity, data);
	}
}