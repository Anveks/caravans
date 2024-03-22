import { Controller, Get, InternalServerErrorException } from "@nestjs/common";
import { OrdersService } from "./orders.service";

@Controller('/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getOrders(){
    try {
      const result = await this.ordersService.getAllOrders();
      return result;
    } catch (err: any) {
      throw new InternalServerErrorException(err.message);
    }
  }
}