import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { BaseEntity } from "../../../common/base.entity";
import { CategoryEntity } from "./category.entity";

@Entity({ name: "post" })
export class PostEntity extends BaseEntity {
  @Column("text")
  public title: string;

  @Column("text")
  public brief: string;

  @Column("text")
  public cover: string;

  @Column("text")
  public content: string;

  @Column("int")
  public view: number;

  @Column("int")
  public like: number;

  @Column("simple-array")
  public labels: string[]

  @ManyToMany(type => CategoryEntity)
  @JoinTable({
    name: "post_category_mapping",
  })
  public categories: CategoryEntity[];
}
