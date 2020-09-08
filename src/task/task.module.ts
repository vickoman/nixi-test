import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskListService } from './taskList.service';
import { TaskListController } from './task.controller';
import { TaskList, TaskListSchema } from './entities/task-list.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TaskList.name,
        schema: TaskListSchema,
      }
    ]),
  ],
  providers: [TaskListService],
  controllers: [TaskListController]
})
export class TaskModule {}
