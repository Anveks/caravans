import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./users.model";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'User',
      schema: UserSchema // importing the UserSchema that we inject in service
    }])
  ],
  controllers: [
    UsersController
  ],
  providers: [
    UsersService
  ]
}) export class UsersModule {}