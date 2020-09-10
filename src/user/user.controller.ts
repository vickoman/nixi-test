import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('users')
export class UserController {

    constructor(
        private readonly userService: UserService
    ){}

    /**
     * Get All users
     */

    @Get("")
    findAll() {
        return this.userService.findAll();
    }

    /**
     *
     * @param id
     * Get User by id
     */
    @Get(":id")
    findOne(@Param('id') id: string ) {
        return this.userService.findOne(id);
    }

    /**
     * @param body
     * {
     *     firstName: "",
     *     lastName: "",
     *     email: "",
     *     password: "",
     *     isEnable: true, // true by default
     * }
     * create new User
     */

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    /**
     * @param id String
     * @param body
     {
     *     firstName: "",
     *     lastName: "",
     *     email: "",
     *     password: "",
     *     isEnable: true,
     * }
     * update  User
     */
    @Patch(":id")
    update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    /**
     * @param id String
     * @param body
     {
     *     address: "",
     *     age: "",
     *     photo: "",
     * }
     * Update User Profile
     */
    @Patch(":id/profile")
    updateProfile(@Param("id") id: string, @Body() updateProfileDto: UpdateProfileDto) {
        return this.userService.updateProfile(id, updateProfileDto);
    }

    /**
     * @param id string
     * Delete User
     */
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.userService.remove(id);
    }
}
