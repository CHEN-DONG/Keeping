import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "../../../common/base.entity";

@Entity({ name: "role" })
export class RoleEntity extends BaseEntity {
  @Column("varchar", { length: 100 })
  public name: string;

  @Column("varchar", { nullable: true, length: 200 })
  public comment: string | null;
}
