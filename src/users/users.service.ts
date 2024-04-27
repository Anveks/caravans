import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { User } from "./users.model";
import { UserType } from "src/shared/enums/user_type.enum";

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private readonly userModel: Model<User>){} // injecting the Schema 
  
  // add one 
  async create(userObj: { name: string, email: string, password: string, address: string }): Promise<User> {
    const newUser = new this.userModel({ // creating a new user with the help of mongoose-powered userModel
      _id: new mongoose.Types.ObjectId(),
      name: userObj.name,
      email: userObj.email,
      password: userObj.password, // should a hash password function be added here? TODO:
      address: userObj.address,
      type: UserType.USER // regular user by default 
    });
    const result = await newUser.save(); // saving in the db
    return result;
  };

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

  // get one
  async findOneUser(_id: string): Promise<User> {
    const user = await this.userModel.findById(_id).exec();
    return user;
  }

  // find one by email 
  async findByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({email: email}).exec();
    return user;
  }

  // update
  async update(updatedUser): Promise<User>{
    return null;
  }

}