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
}
