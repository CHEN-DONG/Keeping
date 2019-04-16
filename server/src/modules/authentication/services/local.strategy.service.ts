import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy } from "passport-local";
import { Repository } from "typeorm";
import { UserEntity } from "../../dashboard/entities/user.entity";
import { createResult }  from "../../../common/utils"

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super({});
  }

  public async validate(username: string, password: string, done: Function) {
    const user = await this.userRepository.findOne({
      relations: ["roles"],
      where: { username, password },
    });
    if(!user) return done(null, false, { message: 'Incorrect username or password' })
    done(null, user);
  }
}
