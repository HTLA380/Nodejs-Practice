import mongoose from 'mongoose';
import { UserDocument } from './user.model';

export interface SchemaInput {
  user: UserDocument['_id'];
  valid: boolean;
  userAgent: string;
}

export interface SchemaDocument extends SchemaInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<Boolean>;
}

const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    valid: {
      type: Boolean,
      default: true,
    },
    userAgent: { type: String },
  },
  { timestamps: true }
);

const SessionModel = mongoose.model('Session', sessionSchema);

export default SessionModel;
