import { Injectable } from "@nestjs/common";
import { InjectEntityManager } from "@nestjs/typeorm";
import { EntityManager } from "typeorm";




@Injectable()
export class CommonService{
    
    constructor(
        @InjectEntityManager()
        private readonly entityManager: EntityManager,
    ) {}

    async create(entity, data){
        await this.entityManager.insert(entity, data)
    }
}