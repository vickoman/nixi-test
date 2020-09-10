import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';
import { Profile } from "./profile.entity";

export enum TaskStatusEnum {
    ACTIVA = "activa",
    TERMINADA = "terminada",
};

@Schema()
export class User  extends Document {
    @Prop({ required: true })
    fullName: string;

    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    isEnable: boolean;

    @Prop()
    profile: Profile

    @Prop()
    createdAt: Date;

    @Prop()
    updatedAt: Date;

}

export const UserSchema = SchemaFactory.createForClass(User);
