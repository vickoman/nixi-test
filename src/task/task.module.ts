import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
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
  providers: [TaskService],
  controllers: [TaskController]
})
export class TaskModule {}
