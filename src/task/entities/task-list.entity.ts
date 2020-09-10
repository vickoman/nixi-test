import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';

export enum TaskListStatus {
    CREADA = "creada",
    ENPROGRESO = "enprogreso",
    TERMINADA = "terminada",
    FALLIDA = "fallida"
};

@Schema()
export class TaskList  extends Document {
    @Prop()
    userId: Types.ObjectId;

    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    status: TaskListStatus;

    @Prop()
    tasks: string;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

}

export const TaskListSchema = SchemaFactory.createForClass(TaskList);
