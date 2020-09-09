import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskList } from './entities/task-list.entity';
import { CreateListDto } from './dto/create-list.dto';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {ObjectId} from "mongodb";

@Injectable()
export class TaskListService {
    constructor(
        @InjectRepository(TaskList) private taskListRepository: MongoRepository<TaskList>
    ) {
    }

    findAll() {
        return this.taskListRepository.find();
    }

    async findOne(id: string) {
        const taskList = await this.taskListRepository.findOne(id);
        if (!taskList) {
            throw new NotFoundException(`TaskList #${id} not found`);
        }
        return taskList;
    }

    async create(createListDto: CreateListDto) {
        const today = new Date();
        const extendCreateListObject = {...createListDto, createdAt: today, updatedAt: today};
        return this.taskListRepository.save(extendCreateListObject);
    }

    async update(id: string, updateTaskDto: any) {
        const today = new Date();
        const extendCreateListObject = {...updateTaskDto, updatedAt: today};
        const existTaskList = await this.taskListRepository.findOneAndUpdate({ _id: new ObjectId(id) }, { $set: extendCreateListObject});
        if (!existTaskList.value) {
            throw new NotFoundException(`TaskList #${id} not found`);
        }
        return existTaskList;
    }

    async remove(id: string) {
        return this.taskListRepository.findOneAndDelete({ _id: new ObjectId(id) });
    }

}
