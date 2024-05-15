import { Request, Response } from 'express';

export function getUsers(request: Request, response: Response) {
  response.json({ success: true });
}

export function getUserById(request: Request, response: Response) {
  response.json({ success: true });
}
