import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Patch, Post, Put, Req } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "../shared/models/users.model";
import { RouteNotFoundError } from "src/shared/models/error.models";

@Controller('/users')
export class UsersController {
  constructor (private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body("name") name: string,
    @Body("email") email: string,
    @Body("password") password: string,
    @Body("address") address: string
  ): Promise<User> {
    const userObj = {
      name: name,
      email: email,
      password: password,
      address: address
    };
    const newUser = await this.usersService.create(userObj);
    console.log(newUser);
    return newUser;
  };

  // get all
  @Get()
  async findAll(): Promise<User[]> {
    try {
      const result = await this.usersService.getAllUsers(); // getting all users
      return result;
    } catch(err: any) {
      throw new InternalServerErrorException(err.message); // rethrow error message if occurs
    }
  };

  // find one by id
  @Get(":id")
  async findOne(
    @Param('id') id: string
  ): Promise<User> {
    const user = await this.usersService.findOneUser(id);
    return user;
  };

  // find one by email
  @Get("search/email")
  async findByEmail(
    @Body("email") email: string
  ): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    return user;
  };

  @Patch("/:id")
  async update(
    @Param('id') id: string,
    @Body("name") name: string,
    @Body("email") email: string,
    @Body("password") password: string,
    @Body("address") address: string,
    @Body("type") type: number,
  ): Promise<User> {
    const updatedUserObj = {
      name: name,
      email: email,
      password: password,
      address: address,
      type: type
    };
    console.log(updatedUserObj);
    
    const result = await this.usersService.update(id, updatedUserObj);
    return result;
  }

  @Delete("/:id")
  async delete(
    @Param("id") id: string
  ): Promise<{status: number, message: string}> {
    const result = await this.usersService.delete(id);
    return result;
  }

};