import * as mongoose from 'mongoose';

export const StatusSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true, unique: true },
});

export interface Status extends mongoose.Document {
  _id: string,
  name: string
} 