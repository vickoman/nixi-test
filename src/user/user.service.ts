import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<User>
    ){}

    // Retrieve all users
    findAll() {
        return this.userModel.find().exec();
    }

    // find user by id
    async findOne(id: string) {
        const user = await this.userModel.findById(id).exec();
        if (!user) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return user;
    }

    // Create user
    async create(createUserDto: CreateUserDto): Promise<User> {
        const today = new Date();
        const fullName = `${createUserDto.firstName} ${createUserDto.lastName}`;
        createUserDto.isEnable = createUserDto.isEnable ? createUserDto.isEnable: true;
        const extendObjectUser = {...createUserDto, fullName, createdAt: today, updatedAt: today};
        const user = new this.userModel(extendObjectUser);
        return user.save();
    }

    // Updaet User
    async update(id: string, updateUserDto: any): Promise<User> {
        const today = new Date();
        const extendObjectUser = {...updateUserDto, updatedAt: today};
        const userUpdated = await this.userModel
                                .findOneAndUpdate({ _id: id }, { $set: extendObjectUser}, { new: true })
                                .exec();
        if (!userUpdated) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return userUpdated;
    }

    // Delete users
    async remove(id: string) {
        const user = await this.findOne(id);
        return user.remove();
    }
}
