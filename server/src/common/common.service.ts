import { Injectable, Inject } from "@nestjs/common";
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
		data.updaterId = this.request.user ? this.request.user.id : 0;
		return await this.entityManager.insert(entity, data);
	}

	async getListAndCount(entity: any, options?: any) {
		const { pageSize = 10, pageNumber = 1, where = {}} = this.request.query;
		const result = await this.entityManager.findAndCount(entity, Object.assign({
			where: Object.assign({
				isDelete: false,
			}, where),
			skip: (pageNumber - 1) * pageSize,
			take: pageSize,
			order: {
				createDate: "DESC",
			}
		}, options));
		return {
			list: result[0],
			count: result[1],
		};
	}

	async update(entity: any, id: number, data: any) {
		data.updateDate = new Date();
		data.updaterId = this.request.user ? this.request.user.id : 0;
		return await this.entityManager.update(entity, id, data); 
	}
}