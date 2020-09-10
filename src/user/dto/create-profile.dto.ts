import { IsString, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProfileDto {

    @IsString()
    @ApiProperty()
    photo?: string;

    @IsString()
    @ApiProperty()
    address?: string;

    @IsString()
    @ApiProperty()
    age?: number;

}
