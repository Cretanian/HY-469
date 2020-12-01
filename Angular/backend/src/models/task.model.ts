import { Document, Schema, Model, model } from 'mongoose';
import { DefaultSchemaOptions } from './shared';


// ------------------------------------------
// Interface declaration
export interface ITask extends Document {
  title: string;
  description: string;
}

// ------------------------------------------
// Schema definition
const taskSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { ...DefaultSchemaOptions }
);

// ------------------------------------------
// Schema model exports
export const TaskModel: Model<ITask> = model<ITask>(
  'Task', taskSchema, 'Task'
);
