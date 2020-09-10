import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';

@Schema()
export class Profile  extends Document {
    @Prop()
    photo: string;

    @Prop()
    address: string;

    @Prop()
    age: number;

}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
