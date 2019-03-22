import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../../common/base.entity";

@Entity({ name: "session" })
export class SessionEntity extends BaseEntity {
  @Column("varchar")
  public sid: string;

  @Column("json")
  public sess: string;

  @Column("timestamp")
  public expire: string;
}
