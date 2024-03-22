import { Controller, Get, InternalServerErrorException } from "@nestjs/common";
import { ProductsService } from "./product.service";
import { Product } from "./product.model";

@Controller('/products')
export class ProductsController {
  constructor (private readonly productsService: ProductsService) {}; // injecting services

  @Get()
  async getAllProducts(): Promise<Product[]>{
    try {
      const result = await this.productsService.getAllProducts();
      return result;
    } catch (err: any) {
      throw new InternalServerErrorException(err.message);
    }
  }
}