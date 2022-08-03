import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    private users = [
    {
        id: 1,
        email: 'matt@gmail.com'
    },
    {
        id: 2,
        email: 'jason@gmail.com'
    }];

    getAllUsers() {
        return {
            id: 1,
            email: 'test@gmail.com',
        }
    }

    getUserById(id: number) {
        return this.users.find((user) => user.id === id);
    }

    insertUser(id, email) {
        return this.users.push({id, email});
    }
}
