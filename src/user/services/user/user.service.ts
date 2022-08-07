import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Users)
        private usersRepository : Repository<Users>
    ) {}

    getAllUsers(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    getUserById(id: number): Promise<Users[]> {
        return this.usersRepository.find({where: {id : id}})
    }

    insertUser(body : {username: string, password: string, email: string, firstName: string, lastName: string}) {
        return this.usersRepository.insert(body);
    }

    // deleteUserById(id: number) {
    //     return this.usersRepository.delete({id: id});
    // }
}
