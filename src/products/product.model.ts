
// class Product {
  // - id: ObjectId
  // - categoryId: ObjectId
  // - name: String
  // - description: String
  // - creationDate: Date
  // - price: Double
  // - location: String
  // - metaData: Map<String, String>
  // - status: Status
  // - userId: ObjectId
// }

import * as mongoose from 'mongoose';
import { StatusEnum } from './status.enum';

export const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  categoryId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Category',
    required: true 
  },
  name: { type: String, required: true },
  description: { type: String, required: true },
  creationDate: { type: Date, default: Date.now, required: true },
  price: { type: Number, required: true }, // Change to Number for price
  location: { type: String, required: true },
  metaData: { type: Map, of: String }, // Use Map for metaData
  status: { 
    type: String, 
    enum: StatusEnum, // Assuming these are the possible statuses
    required: true,
    default: StatusEnum.AVAILABLE
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Assuming there's a User model
    required: true 
  }
});

export interface Product extends mongoose.Document {
  _id: string,
  categoryId: mongoose.Types.ObjectId,
  name: string,
  description: string,
  creationDate: Date,
  price: number,
  location: string,
  metaData: Map<string, string>,
  status: string,
  userId: mongoose.Types.ObjectId
} 
