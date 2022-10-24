import { Document } from 'mongoose';

export interface Task extends Document {
  title: string;
  completed?: boolean;
  removed?: boolean;
  userId?: string;
  createdAt: Date;
}
