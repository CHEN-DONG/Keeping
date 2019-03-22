import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "../../../common/base.entity";
import { CategoryEntity } from "./category.entity";

@Entity({ name: "post" })
export class PostEntity extends BaseEntity {
  @Column("text")
  public title: string;

  @Column("text", { nullable: true })
  public brief: string;

  @Column("text", { nullable: true })
  public cover: string;

  @Column("text")
  public content: string;

  @Column("int", { default: 0 })
  public view: number;

  @Column("int", { default: 0 })
  public like: number;

  @Column("int", { default: 0 })
  public status: number;

  @Column("simple-array", { nullable: true })
  public labels: string[]

  @ManyToMany(type => CategoryEntity)
  @JoinTable({
    name: "post_category_mapping",
  })
  public categories: CategoryEntity[];
}
