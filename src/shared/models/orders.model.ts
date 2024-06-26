// class Order {
//   - id: ObjectId
//   - userId: ObjectId
//   - productId: ObjectId
//   - creationDate: Date
// }

import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // creating relation with users collection
    required: true
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // creating relation with products collection
    required: true
  },
  creationDate: {
    type: Date,
    required: true,
    default: Date.now
  }
});

export interface Order extends mongoose.Document {
  _id: string,
  userId: string,
  productId: string,
  creationDate: Date
}