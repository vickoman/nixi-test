import { Entity, Column, ObjectIdColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum TaskListStatus {
    CREADA = "creada",
    ENPROGRESO = "enprogreso",
    TERMINADA = "terminada",
    FALLIDA = "fallida"
};

@Entity("list")
export class TaskList {

    @ObjectIdColumn()
    _id: string;

    @Column()
    name: string;

    @Column()
    status: string;

    @CreateDateColumn({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    createdAt: Date;

    @UpdateDateColumn({
        type: "timestamp with time zone",
        default: () => "NOW()"
    })
    updatedAt: Date;

}
