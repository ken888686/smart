import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { Status, User } from './user.model';

@Injectable()
export class UsersService {
  private userList: User[] = [
    {
      id: 1,
      email: 'ken888686@gmail.com',
      status: Status.ENABLED,
    },
    {
      id: 2,
      email: 'ken666868@hotmail.com',
      status: Status.ENABLED,
    },
  ];
  private idCount = this.userList.length;

  constructor() {}

  getById(id: number): User {
    return this.userList.find((x) => x.id === id);
  }

  getAll(): User[] {
    return this.userList;
  }

  add(data: CreateUserDto): User {
    const { email, status } = data;
    const user: User = {
      id: ++this.idCount,
      email: email,
      status: status,
    };
    this.userList.push(user);
    return this.getById(user.id);
  }
}
