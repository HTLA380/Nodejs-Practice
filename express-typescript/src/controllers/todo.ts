import { Request, Response } from 'express';

export async function getTodo(req: Request, res: Response) {
  res.send('Get todos');
}

export async function getTodoById(req: Request, res: Response) {
  res.send('Get todo by id');
}

export async function createTodo(req: Request, res: Response) {
  res.send('create todo');
}

export async function updateTodo(req: Request, res: Response) {
  res.send('update todo');
}

export async function deleteTodo(req: Request, res: Response) {
  res.send('delete todo');
}
