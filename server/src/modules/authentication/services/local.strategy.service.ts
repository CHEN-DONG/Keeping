import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy } from "passport-local";
import { Repository } from "typeorm";
import { UserEntity } from "../../dashboard/entities/user.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super({});
  }

  public async validate(username: string, password: string, done: Function) {
    console.log(username, password);
    const user = await this.userRepository.findOne({
      relations: ["roles"],
      where: { username, password },
    });
    done(null, user);
  }
}
