import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from "typeorm";
import { BaseEntity } from "../../../common/base.entity";
import { RoleEntity } from "./role.entity"


@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  @Column("varchar", { length: 100 })
  public username: string;

  @Column("varchar", { length: 100, select: false })
  public password: string;

  @Column("varchar", { nullable: true })
  public avatar: string | null;

  @Column("varchar", { nullable: true, length: 100 })
  public email: string;

  @Column("varchar", { nullable: true, length: 200 })
  public comment: string | null;

  @JoinTable({
    inverseJoinColumn: { name: "role_id" },
    joinColumn: { name: "user_id" },
    name: "user_role_mapping",
  })
  @ManyToMany(() => RoleEntity)
  public roles: RoleEntity[];

}
