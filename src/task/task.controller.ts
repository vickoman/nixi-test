import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { TaskListService } from './taskList.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

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

    /**
     * @param id String
     * @param body
     * {
     *     name: "",
     *     status: "created"
     * }
     * update  List
     */
    @Patch(":id")
    update(@Param("id") id: string, @Body() updateListDto: UpdateListDto) {
        return this.tasklistService.update(id, updateListDto);
    }


}
