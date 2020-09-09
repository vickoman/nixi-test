import { IsString, IsDate } from "class-validator";

export class CreateListDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly status: string;

    @IsDate()
    readonly createdAt: Date;

    @IsDate()
    readonly updatedAt: Date;
}
