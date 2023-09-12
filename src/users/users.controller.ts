import { Body, Controller, Get, Put } from '@nestjs/common';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll(): User[] {
    return this.usersService.getAll();
  }

  @Put()
  create(@Body() body: User): User {
    return this.usersService.add(body);
  }
}
