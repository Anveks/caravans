import { Controller, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OrderSchema } from "../shared/models/orders.model";
import { OrdersController } from "./osers.controller";
import { OrdersService } from "./orders.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ // importing the Schema
      name: "Order",
      schema: OrderSchema
    }]),
  ],
  controllers: [
    OrdersController
  ],
  providers: [
    OrdersService
  ]
}) export class OrdersModule {}