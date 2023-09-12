import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}

  hello(): string {
    return 'Hi';
  }
}
