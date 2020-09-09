import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';

export enum TaskStatusEnum {
    ACTIVA = "activa",
    TERMINADA = "terminada",
};

@Schema()
export class Task  extends Document {
    @Prop()
    title: string;

    @Prop()
    listId: Types.ObjectId;

    @Prop()
    status: TaskStatusEnum;

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

}

export const TaskSchema = SchemaFactory.createForClass(Task);
