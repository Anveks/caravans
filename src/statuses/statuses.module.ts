import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { StatusSchema } from "./statuses.model";
import { StatusesController } from "./statuses.controller";
import { StatusesService } from "./statuses.service";


@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Status',
      schema: StatusSchema
    }])
  ],
  controllers: [ StatusesController ],
  providers: [ StatusesService ]
}) export class StatusesModule {};