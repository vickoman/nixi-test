import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TaskList } from './entities/task-list.entity';
import { Model } from 'mongoose';
import { CreateListDto } from './dto/create-list.dto';

@Injectable()
export class TaskListService {
    constructor(
        @InjectModel(TaskList.name) private readonly taskListModel: Model<TaskList>
    ) {}

    findAll() {
        return this.taskListModel.find().exec();
    }

    create(createListDto: CreateListDto) {
        const listTask = new this.taskListModel(createListDto);
        return listTask.save();
    }

    async update(id: string, updateTaskDto: any) {
        const existTaskList = await this.taskListModel
                                .findOneAndUpdate({ _id: id }, { $set: updateTaskDto}, { new: true})
                                .exec()
        if (!existTaskList) {
            throw new NotFoundException(`TaskList #${id} not found`);
        }
        return existTaskList;
    }

}
