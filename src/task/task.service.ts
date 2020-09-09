import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Task } from './entities/task.entity';
// import { InjectModel } from '@nestjs/mongoose';
// import { Task } from './entities/task.entity';
// import { Model } from 'mongoose';
// import {Types} from 'mongoose';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(Task) private taskListRepository: MongoRepository<Task>
    ) {
    }

//     async findTaskByListId(id: string) {
//         const tasks = await this.task.find({ listId: Types.ObjectId(id) }).exec();
//         if (!tasks) {
//             throw new NotFoundException(`TaskList #${id} not found`);
//         }
//         return tasks;
//     }
}
