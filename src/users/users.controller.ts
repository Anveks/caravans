import { Body, Controller, Get, InternalServerErrorException, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./users.model";

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

  @Put()
  async update(
    @Body("name") name: string,
    @Body("email") email: string,
    @Body("password") password: string,
    @Body("address") address: string
  ): Promise<User> {
    const updatedUserObj = {
      name: name,
      email: email,
      password: password,
      address: address
    };
    const result = await this.usersService.update(updatedUserObj);
    return result;
  }

};