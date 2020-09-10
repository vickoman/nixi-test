import { IsString, IsBoolean, IsObject } from "class-validator";
import { CreateProfileDto } from "./create-profile.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @IsString()
    @ApiProperty()
    readonly firstName: string;

    @IsString()
    @ApiProperty()
    readonly lastName: string;

    @IsString()
    @ApiProperty()
    readonly email: string;

    @IsString()
    @ApiProperty()
    readonly password: string;

    @IsBoolean()
    @ApiProperty()
    isEnable?: boolean;

    @IsObject()
    @ApiProperty()
    profile: CreateProfileDto
}
