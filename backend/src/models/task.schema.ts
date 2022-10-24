import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false },
  removed: { type: Boolean, required: true, default: false },
  userId: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});
