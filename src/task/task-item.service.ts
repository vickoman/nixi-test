import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './entities/task.entity';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskItemService {
    constructor(
        @InjectModel(Task.name) private readonly taskModel: Model<Task>
    ) { }

    // Retrieve all tasks from listId
    async findTasksByListId(listid: string) {
        const taksByListId = await this.taskModel.find( { listId: new ObjectId(listid) }).exec();

        if (!taksByListId) {
            throw new NotFoundException(`the list #${listid} does not have tasks`);
        }
        return taksByListId;

    }

    // Retrieve task by id
    async findTaskById(id: string) {
        const task = await this.taskModel.findById(id);

        if (!task) {
            throw new NotFoundException(`The task #${id} does not exits`);
        }

        return task;
    }

    // Create task
    create(listId: string, createTaskDto: CreateTaskDto) {
        const today = new Date();
        const extendCreateTaskObject = {...createTaskDto, listId: new ObjectId(listId), createdAt: today, updatedAt: today};
        const listTask = new this.taskModel(extendCreateTaskObject);
        return listTask.save();

    }

    // Update Task
    async update(id: string, updateTaskDto: any) {
        const today =  new Date();
        const extendUpdateObject = {...updateTaskDto, updatedAt: today};
        const taskUpdated = await this.taskModel
                                    .findOneAndUpdate({ _id: id }, { $set: extendUpdateObject }, { new: true })
                                    .exec();
        if (!taskUpdated) {
            throw new NotFoundException(`Task #${id} not found`);
        }
        return taskUpdated;
    }

    // Delete task
    async delete(id: string) {
        const task = await this.findTaskById(id);
        return task.remove();
    }
}
