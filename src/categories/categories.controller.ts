import { Controller, Get, InternalServerErrorException } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { Category } from "../shared/models/categories.model";

@Controller('/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {} // importing service

  @Get()
  async getAllCategories(): Promise<Category[]> {
    try {
      const result = await this.categoriesService.getAllCategories();
      return result;
    } catch (err: any) {
      throw new InternalServerErrorException(err.message); // rethrow error if occurs
    }
  }
}