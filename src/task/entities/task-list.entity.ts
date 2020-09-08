import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export enum TaskListStatus {
    CREADA = "creada",
    ENPROGRESO = "enprogreso",
    TERMINADA = "terminada",
    FALLIDA = "fallida"
};

@Schema()
export class TaskList  extends Document {
    @Prop()
    name: string;

    @Prop()
    status: TaskListStatus;

}

export const TaskListSchema = SchemaFactory.createForClass(TaskList);
