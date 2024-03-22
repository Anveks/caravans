import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product } from "./product.model";
import { Model } from "mongoose";

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>){}

  // get all
  async getAllProducts() {
    let products: Product[] = [];
    try {
      products = await this.productModel.find()
      .populate({ // populating the categoryId field based on the _id stored
        path: 'categoryId',
        select: '_id name isEnable' // selecting the fields we want to extract
      });
      return products;
    } catch(err: any) {
      if (products.length === 0) throw new InternalServerErrorException("Error while fetching the products.");
    }
  }
}