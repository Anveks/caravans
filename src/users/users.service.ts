import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { User } from "../shared/models/users.model";
import { UserType } from "src/shared/enums/user_type.enum";
import { UtilsService } from "src/shared/utils/utils.service";
import { ResourceNotFoundError, ValidationError } from "src/shared/models/error.models";

@Injectable()
export class UsersService {
  constructor(@InjectModel("User") private readonly userModel: Model<User>,
              private readonly utilsService: UtilsService){} // injecting the Schema 
  
  // add one 
  async create(userObj: { name: string, email: string, password: string, address: string }): Promise<User> {

    const emailIsTaken = await this.utilsService.emailIsTaken(userObj.email);
    if (emailIsTaken) throw new ValidationError(userObj.email);

    const newUser = new this.userModel({ // creating a new user with the help of mongoose-powered userModel
      _id: new mongoose.Types.ObjectId(),
      name: userObj.name,
      email: userObj.email,
      password: await this.utilsService.hashPassword(userObj.password),
      address: userObj.address,
      type: UserType.USER // regular user by default 
    });
    const result = await newUser.save(); // saving in the db
    return result;
  };

  // get all
  async getAllUsers(){
    const users = await this.userModel.find();
    return users;
  };

  // get one
  async findOneUser(_id: string): Promise<User> {
    const user = await this.userModel.findById(_id).exec();
    if (!user) throw new ResourceNotFoundError(null, "User not found.");
    return user;
  }

  // find one by email 
  async findByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({email: email}).exec();
    if (!user) throw new ResourceNotFoundError(email);
    return user;
  }

  // update
  async update(id: string, updatedUser: { name: string, email: string, password: string, address: string, type: number }): Promise<User>{

    const existingUser = await this.userModel.findById(id).exec();
    if (existingUser.email !== updatedUser.email) {
      const emailIsTaken = await this.utilsService.emailIsTaken(updatedUser.email);
      if (emailIsTaken) throw new ValidationError(updatedUser.email);
    };

    updatedUser.password = await this.utilsService.hashPassword(updatedUser.password);

    const result = await this.userModel.findByIdAndUpdate(
      { _id: id }, 
      updatedUser, 
      { new: true }) // returning the updated document as a response 
      .exec();
    return result;
  }

  async delete(id: string): Promise<{status: number, message: string}> {

    const user = await this.userModel.findById(id).exec();
    if (!user) throw new ResourceNotFoundError(null, "User not found.");

    const result = await this.userModel.deleteOne({ _id: id });
    if (result.deletedCount !== 0) {
      return { status: 200, message: "Delete successfull!" };
    }
    
  }

}