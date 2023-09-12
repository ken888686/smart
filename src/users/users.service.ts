import { Injectable } from '@nestjs/common';

type User = {
  id: number;
  email: string;
};

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      email: 'ken888686@gmail.com',
    },
    {
      id: 2,
      email: 'ken666868@hotmail.com',
    },
  ];

  constructor() {}

  getAll() {
    return this.users;
  }
}
