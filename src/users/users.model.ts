// class User {
//   - id: ObjectId
//   - name: String
//   - password: String
//   - email: String
//   - address: String
//   - type: UserType
// }

import mongoose from 'mongoose';
import { UserType } from './user_type.enum';

export * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  address: { 
    type: String, 
    required: true 
  },
  type: { 
    type: String, 
    enum: UserType,
    required: true, 
    default: UserType.USER
   }
});

export interface User extends mongoose.Document {
  _id: string,
  name: string,
  email: string,
  password: string,
  address: string,
  type: UserType
} 