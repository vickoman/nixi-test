import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskListService } from './taskList.service';
import { TaskItemService } from './task-item.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpadateTaskDto } from './dto/upadate-task.dto';

@Controller('lists')
export class TaskListController {
    constructor(
        private readonly tasklistService: TaskListService,
        private readonly taskItemService: TaskItemService,
    ){}

    /**
     * Getl All List
     */

    @Get("")
    findAll() {
        return this.tasklistService.findAll();
    }

    /**
     *
     * @param id
     * Get Tasklist by id
     */
    @Get(":id")
    findOne(@Param('id') id: string ) {
        return this.tasklistService.findOne(id);
    }

    /**
     *
     * @param listId
     * Get Tasks of the list
     */
    @Get(":listId/tasks")
    findTasksByListId(@Param("listId") listId: string) {
        return this.taskItemService.findTasksByListId(listId);
    }

    /**
     *
     * @param id
     * Get Task by id
     */
    @Get(":listId/task/:id")
    findTaskById(@Param("id") id: string) {
        return this.taskItemService.findTaskById(id);
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
     * @param body
     * {
     *     title: "",
     *     description: "",
     *     listId: ObjectId
     *     status: "created"
     * }
     * create new task with listId
     */

    @Post(":listId/tasks")
    createTask(@Body() createTaskDto: CreateTaskDto, @Param("listId") listId: string) {
        return this.taskItemService.create(listId, createTaskDto);
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

    /**
     * @param id String
     * @param body
     * {
     *     title: "",
     *     description: "",
     *     status: "created"
     * }
     * update  List
     */
    @Patch(":listId/task/:id")
    updateTask(@Param("id") id: string, @Body() upadateTaskDto: UpadateTaskDto) {
        return this.taskItemService.update(id, upadateTaskDto);
    }

    /**
     * @param id string
     * Delete TaskList
     */
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.tasklistService.remove(id);
    }

    /**
     * @param id string
     * Delete task
     */
    @Delete(":listId/task/:id")
    removeTask(@Param("id") id: string) {
        return this.taskItemService.delete(id);
    }


}
