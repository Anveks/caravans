import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order } from "../shared/models/orders.model";

@Injectable()
export class OrdersService {
  constructor(@InjectModel('Order') private readonly orderModel: Model<Order>){}

  async getAllOrders(){
    let orders: Order[] = [];
    try {
      orders = await this.orderModel.find()
      .populate({ // populating the user field based on the id + relation in the schema
        path: 'userId',
        select: '_id name email'
      })
      .populate({
        path: 'productId',
        select: '_id name status'
      });
      return orders;
    } catch (err: any) {
      if (orders.length) throw new InternalServerErrorException('Error while fetching orders');
    }
  }
}