import { IsString } from "class-validator";

export class CreateTaskDto {

    @IsString()
    readonly title: string;

    @IsString()
    readonly listId: string;

    @IsString()
    readonly description: string;

    @IsString()
    readonly status: string;
}
