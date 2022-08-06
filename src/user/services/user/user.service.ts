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

    // getUserById(id: number) {
    //     return this.users.find((user) => user.id === id);
    // }

    // insertUser(id, email) {
    //     return this.users.push({id, email});
    // }
}
