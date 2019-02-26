import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../common/base.entity";

@Entity({ name: "category" })
export class CategoryEntity extends BaseEntity {
  @Column("text")
  public name: string;

  @Column("text")
  public brief: string;

  @Column("text")
  public cover: string;

  @Column("text")
  public code: string;
}
