import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "../models/users.model";
import { Injectable } from "@nestjs/common";
import { ValidationError } from "../models/error.models";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UtilsService {

  constructor(@InjectModel("User") private readonly userModel: Model<User>){}

  async emailIsTaken(email: string): Promise<boolean> {    
    const user = await this.userModel.findOne({email: email}).exec(); 
    return user !== null;
  }

  async hashPassword(password: string): Promise<string> {
    if (!password) throw new ValidationError(null, "Password is required!");
    const hashPassword = await bcrypt.hash(password, 10);
    return hashPassword;
  }  

}