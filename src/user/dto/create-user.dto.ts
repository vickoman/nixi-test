import { IsString, IsBoolean, IsObject } from "class-validator";
import { CreateProfileDto } from "./create-profile.dto";

export class CreateUserDto {

    @IsString()
    readonly firstName: string;

    @IsString()
    readonly lastName: string;

    @IsString()
    readonly email: string;

    @IsString()
    readonly password: string;

    @IsBoolean()
    isEnable?: boolean;

    @IsObject()
    profile: CreateProfileDto
}
