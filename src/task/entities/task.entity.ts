import { Entity, Column, ObjectIdColumn, ObjectID, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum TaskStatus {
    ACTIVA = "activa",
    TERMINADA = "terminada"
};


@Entity("tasks")
export class Task {

    @ObjectIdColumn()
    _id: ObjectID;

    @ObjectIdColumn()
    listId: ObjectID;

    @Column()
    title: string;

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
