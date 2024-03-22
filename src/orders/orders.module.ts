import { Controller, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { OrderSchema } from "./orders.model";
import { OrdersController } from "./osers.controller";
import { OrdersService } from "./orders.service";

@Module({
  imports: [
    MongooseModule.forFeature([{
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