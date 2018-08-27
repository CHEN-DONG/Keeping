import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Common {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @Column({
    default: () => "now()"
  })
  deleteAt: Date;

  @Column({
    default: false
  })
  isDelete: boolean;

}