import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskListService } from './taskList.service';
import { TaskItemService } from './task-item.service';
import { TaskListController } from './task.controller';
import { TaskList, TaskListSchema } from './entities/task-list.entity';
import { Task, TaskSchema } from './entities/task.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TaskList.name,
        schema: TaskListSchema,
        collection: "List",
      },
      {
        name: Task.name,
        schema: TaskSchema,
        collection: "Task",
      }
    ]),
  ],
  providers: [TaskListService, TaskItemService],
  controllers: [TaskListController]
})
export class TaskModule {}
