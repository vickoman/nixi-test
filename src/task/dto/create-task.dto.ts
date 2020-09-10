import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {

    @IsString()
    @ApiProperty()
    readonly title: string;

    @IsString()
    @ApiProperty()
    readonly listId: string;

    @IsString()
    @ApiProperty()
    readonly description: string;

    @IsString()
    @ApiProperty()
    readonly status: string;
}
