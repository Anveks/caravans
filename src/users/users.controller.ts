import { Controller, Get, InternalServerErrorException } from "@nestjs/common";
import { UsersService } from "./users.service";
import { User } from "./users.model";

@Controller('/users')
export class UsersController {
  constructor (private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    try {
      const result = await this.usersService.getAllUsers();
      return result;
    } catch(err: any) {
      throw new InternalServerErrorException(err.message)
    }
  }
};