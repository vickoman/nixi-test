import { IsString } from "class-validator";

export class CreateListDto {
    @IsString()
    readonly naame: string;

    @IsString()
    readonly status: string;
}
