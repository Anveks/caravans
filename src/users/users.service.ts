import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./users.model";

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private readonly userModel: Model<User>){} // injecting the Schema  

  // get all
  async getAllUsers(){
    let users: User[] = [];
    try {
      users = await this.userModel.find();
      return users;
    } catch (err: any) {
      if (users.length === 0) throw new InternalServerErrorException("Error while fetching the users."); // if no users found - throw a server err
    }
  };
}