import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Common } from "./common";

@Entity()
export class Post extends Common {
  @Column({
    length: 100
  })
  title: string;

  @Column()
  content: string;

  @Column({
    length: 200,
    nullable: true
  })
  description: string

  @Column({
    nullable: true
  })
  picture: string

  @Column({
    default: 0
  })
  viewCount: number;

  @Column({
    default: 0
  })
  likeCount: number;

  @Column()
  status: number;

}