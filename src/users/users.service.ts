import { Injectable } from '@nestjs/common';
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

  get(id: number): User {
    return this.userList.find((x) => x.id === id);
  }

  getAll(): User[] {
    return this.userList;
  }

  add(data: User): User {
    data.id = ++this.idCount;
    this.userList.push(data);
    return this.get(data.id);
  }
}
