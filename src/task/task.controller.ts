import { Controller, Get, Post, Body } from '@nestjs/common';
import { TaskListService } from './taskList.service';
import { CreateListDto } from './dto/create-list.dto';

@Controller('tasklist')
export class TaskListController {
    constructor(
        private readonly tasklistService: TaskListService
    ){}

    /**
     * Getl All List
     */

    @Get("")
    findAll() {
        return this.tasklistService.findAll();
    }

    /**
     * @param body
     * {
     *     name: "",
     *     status: "created"
     * }
     * create new List
     */
    @Post()
    create(@Body() createListDto: CreateListDto) {
        return this.tasklistService.create(createListDto);
    }
}
