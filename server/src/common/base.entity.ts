import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp
} from "typeorm";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column("int", { name: "creater_id", nullable: true })
  public createrId: number | null;

  @Column("timestamp", { name: "create_date", nullable: true })
  public createDate: Date;

  @Column("int", { name: "updater_id", nullable: true })
  public updaterId: number | null;

  @Column("timestamp", { name: "update_date", nullable: true})
  public updateDate: Date;

  @Column("boolean", { name: "is_delete", default: false })
  public isDelete: boolean;
}
