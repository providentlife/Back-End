import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getAllUsers() {
        return 'Grabbing Users'
    }
}
