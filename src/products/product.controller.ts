import { Controller, Get, InternalServerErrorException } from "@nestjs/common";
import { ProductsService } from "./product.service";

@Controller('/products')
export class ProductsController {
  constructor (private readonly productsService: ProductsService) {};

  @Get()
  async getAllProducts(){
    try {
      const result = await this.productsService.getAllProducts();
      return result;
    } catch (err: any) {
      throw new InternalServerErrorException(err.message);
    }
  }
}