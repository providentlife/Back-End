import { Body, ConsoleLogger, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { check } from 'prettier';
import { UserService } from 'src/user/services/user/user.service';
const bcrypt = require('bcrypt');
const JWTGenerator = require("../../../../util/JWTGenerator.js");

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
    async createUser(@Body() body, @Res() res: Response) {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const bcrytPassword = await bcrypt.hash(body.password, salt);
        body.password = bcrytPassword;
        const checkForUser = await this.userService.getUserByEmail(body.email);
        if (checkForUser.length !== 0) return res.status(500).json({message: "user by this email already exists"});
        const newUser = await this.userService.insertUser(body);
        const token = JWTGenerator(newUser.identifiers[0].id);
        res.status(200).json({token: token});
    }

    @Post('login')
    async loginUser(@Body() body, @Res() res: Response) {
        const userEmail = body.email;
        const userPassWord = body.password;
        const checkForUser = await this.userService.getUserByEmail(userEmail);
        if (checkForUser.length === 0) return res.status(500).json({message: "PASSWORD OR EMAIL IS INCORRECT"});
        const validPassword = await bcrypt.compare(userPassWord, checkForUser[0].password);
        if (!validPassword) return res.status(500).json({message: "PASSWORD OR EMAIL IS INCORRECT"});
        const token = JWTGenerator(checkForUser[0].id);
        res.status(200).json({user: checkForUser[0], token: token});
    }
    
    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
         await this.userService.deleteUserById(id);
         return res.status(202).json({message: "successfully deleted"});
    }
}
