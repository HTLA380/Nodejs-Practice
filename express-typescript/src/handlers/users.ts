import { Request, Response, response } from 'express';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { CreateUserQueryParams } from '../types/query-params';
import { User } from '../types/response';

export function getUsers(request: Request, response: Response) {
  response.json({ success: true });
}

export function getUserById(request: Request, response: Response) {
  response.json({ success: true });
}

export function createUser(
  request: Request<{ id: number }, {}, CreateUserDto, CreateUserQueryParams>,
  response: Response<User>
) {
  return response.status(201).send({
    id: 1,
    username: 'htet',
    email: 'htetaunglin@gmail.com',
  });
}
