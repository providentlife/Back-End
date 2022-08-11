import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from 'src/user/services/user/user.service';
const bcrypt = require('bcrypt');

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get()
    async getUsers(@Res() res: Response) {
        const allUsers = await this.userService.getAllUsers();
        if (allUsers.length !== 0) res.status(200).json(allUsers);
        else res.status(404).json({message: "There are no users"});
    }

    @Get(':id')
    async getSingleUser(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const selectedUser = await this.userService.getUserById(id);
        if (selectedUser.length !== 0) res.json(selectedUser);
        else res.status(404).json({message: 'User not found'});
    }

    @Post()
    async createUser(@Body() body) {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const bcrytPassword = await bcrypt.hash(body.password, salt);
        body.password = bcrytPassword;
        return await this.userService.insertUser(body);
    }
    
    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
         await this.userService.deleteUserById(id);
         return res.status(202).json({message: "successfully deleted"});
    }
}
