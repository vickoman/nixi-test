import { IsString, IsMongoId } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { Types } from 'mongoose';

export class CreateListDto {

    @IsMongoId()
    @ApiProperty()
    userId: Types.ObjectId | string;

    @IsString()
    @ApiProperty()
    readonly name: string;

    @IsString()
    @ApiProperty()
    readonly status: string;
}
