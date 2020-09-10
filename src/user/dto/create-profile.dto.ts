import { IsString, IsBoolean } from "class-validator";

export class CreateProfileDto {

    @IsString()
    photo?: string;

    @IsString()
    address?: string;

    @IsString()
    age?: number;

}
