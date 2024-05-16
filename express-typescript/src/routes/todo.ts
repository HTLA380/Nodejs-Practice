import { Router } from 'express';
import { createTodo, deleteTodo, getTodo, getTodoById, updateTodo } from '../controllers/todo';

const router = Router();

router.route('/').get(getTodo).post(createTodo);
router.route('/:id').get(getTodoById).patch(updateTodo).delete(deleteTodo);

export default router;
