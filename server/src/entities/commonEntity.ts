import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Common {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
      default: new Date()
    })
    createAt: Date;

    @Column({
      default: new Date()
    })
    updateAt: Date;

    @Column({
      default: new Date()
    })
    deleteAt: Date;

    @Column({
      default: false
    })
    isDelete: boolean;

}