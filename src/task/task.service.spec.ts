import { Test, TestingModule } from '@nestjs/testing';
import { TaskListService } from './taskList.service';

describe('TaskService', () => {
  let service: TaskListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskListService],
    }).compile();

    service = module.get<TaskListService>(TaskListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
