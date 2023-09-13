import { IsNotEmpty } from 'class-validator';
import { Status } from '../user.model';

export class CreateUserDto {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  status: Status;
}
