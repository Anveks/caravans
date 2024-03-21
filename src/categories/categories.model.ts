import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  isEnable: { type: Boolean, default: true }
});

export interface Category extends mongoose.Document {
  _id: string,
  name: string,
  description: string,
  creationDate: Date,
  isEnable: boolean
} 