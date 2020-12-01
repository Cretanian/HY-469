import { SchemaOptions } from 'mongoose';

export const DefaultSchemaOptions: SchemaOptions = {
  _id: true,
  id: false,
  timestamps: true,
  versionKey: false,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
};
