import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll(): User[] {
    return this.usersService.getAll();
  }

  @Get('/:id')
  getById(@Param('id') id: string): User {
    return this.usersService.getById(Number.parseInt(id));
  }

  @Put()
  create(@Body() createUserDto: CreateUserDto): User {
    return this.usersService.add(createUserDto);
  }
}
