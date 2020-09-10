import { IsString, IsBoolean } from "class-validator";

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
}
