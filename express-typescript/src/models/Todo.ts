import mongoose, { Document } from 'mongoose';

export interface todoInterface extends Document {
  title: string;
  description: string;
  completed: string;
}

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'todo title is required'],
  },
  description: {
    type: String,
    required: [true, 'todo description is required'],
  },
  completed: {
    type: Boolean,
    required: [true, 'completed is required'],
    default: false,
  },
});

const Todo = mongoose.model<todoInterface>('Todo', todoSchema);
export default Todo;
