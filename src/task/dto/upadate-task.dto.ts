import { PartialType } from "@nestjs/mapped-types";
import { CreateTaskDto } from "./create-task.dto";

export class UpadateTaskDto extends PartialType(CreateTaskDto) {

}
