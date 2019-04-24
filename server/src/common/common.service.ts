import { Injectable, Inject, Delete } from "@nestjs/common";
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

	public async create(entity: any, data: any) {
		data.createDate = new Date();
		data.updateDate = new Date();
		data.createrId = this.request.user ? this.request.user.id : 0;
		data.updaterId = this.request.user ? this.request.user.id : 0;
		return await this.entityManager.save(entity, data);
	}

	public async getListAndCount(entity: any, options:any = {}) {
		const { pageSize = 10, pageNumber = 1 } = this.request.query;
		const { where = {} } = options;
		delete options.where;
		const result = await this.entityManager.findAndCount(entity, Object.assign({
			where: Object.assign({
        isDelete: false,
			}, where),
			skip: (pageNumber - 1) * pageSize,
			take: pageSize,
			order: {
				updateDate: "DESC",
			}
    }, options));
		return {
			list: result[0],
			count: result[1],
		};
	}

	public async update(entity: any, id: number, data: any) {
		data.updaterId = this.request.user ? this.request.user.id : 0
		data.updateDate = new Date();
		const result = await this.entityManager.findOne(entity, id);
		return await this.entityManager.save(Object.assign(result, data)); 
  }
  
  public async delete(entity: any, id: number) {
    const data: any =  {
      isDelete: true,
      updateDate: new Date(),
      updaterId: this.request.user ? this.request.user.id : 0
    };
		return await this.entityManager.update(entity, id, data); 
	}
}