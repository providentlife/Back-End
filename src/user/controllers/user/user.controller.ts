import { Controller, Get, Param, ParseIntPipe, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}
    @Get()
    async getUsers() {
        return await this.userService.getAllUsers();
    }

    // @Get(':id')
    // getSingleUser(@Param('id', ParseIntPipe) id: number, @Req() req: Request, @Res() res: Response) {
    //     const user = this.userService.getUserById(id);
    //     if (user) res.status(200).json(user);
    //     else res.status(400).json({message: 'user not found'});
    // }

    // @Post()
    // createUser(@Req() req: Request, @Res() res: Response) {

    // }
    
}
