import { IsString, IsMongoId } from "class-validator";
import { Types } from 'mongoose';

export class CreateListDto {
    @IsMongoId()
    userId: Types.ObjectId;

    @IsString()
    readonly name: string;

    @IsString()
    readonly status: string;
}
