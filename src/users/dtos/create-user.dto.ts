import { Status } from '../user.model';

export class CreateUserDto {
  email: string;
  status: Status;
}
