import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TaskModule } from '../task/task.module';
import { User, UserSchema } from './entities/user.entity';


@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
        collection: "User"
      }
    ]),
    TaskModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
