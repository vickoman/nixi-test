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

    // Retrieve All Lists
    findAll() {
        return this.taskListModel.aggregate([
            {
                $lookup: {
                    from: "Task",
                    localField: "_id",
                    foreignField: "list",
                    as: "tasks"
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    status: 1,
                    createdAt: 1,
                    updatedAt: 1,
                    tasks: 1
                }
            }
        ]).exec();
    }

    // Find one List
    async findOne(id: string) {
        const taskList = await this.taskListModel.findOne({ _id: id }).exec();
        if (!TaskList) {
            throw new NotFoundException(`TaskList #${id} not found`);
        }
        return taskList;
    }

    // Create list
    create(createListDto: CreateListDto) {
        const today = new Date();
        const extendCreateListObject = {...createListDto, createdAt: today, updatedAt: today};
        const listTask = new this.taskListModel(extendCreateListObject);
        return listTask.save();
    }

    // Update List
    async update(id: string, updateTaskDto: any) {
        const today = new Date();
        const extendCreateListObject = {...updateTaskDto, updatedAt: today};
        const existTaskList = await this.taskListModel
                                .findOneAndUpdate({ _id: id }, { $set: extendCreateListObject}, { new: true})
                                .exec()
        if (!existTaskList) {
            throw new NotFoundException(`TaskList #${id} not found`);
        }
        return existTaskList;
    }

    // Delete List
    async remove(id: string) {
        const taskList = await this.findOne(id);
        return taskList.remove();
    }

}
