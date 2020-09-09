import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskListService } from './taskList.service';
import { TaskListController } from './task.controller';
import { TaskService } from './task.service';
import { TaskList } from './entities/task-list.entity';
import { Task } from './entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskList, Task])
  ],
  providers: [TaskListService, TaskService],
  controllers: [TaskListController]
})
export class TaskModule {}
