import { Controller, Get, InternalServerErrorException } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { Order } from "../shared/models/orders.model";

@Controller('/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getOrders(): Promise<Order[]>{
    try {
      const result = await this.ordersService.getAllOrders();
      return result;
    } catch (err: any) {
      throw new InternalServerErrorException(err.message);
    }
  }
}