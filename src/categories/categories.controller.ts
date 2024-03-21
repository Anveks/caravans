import { Controller, Get, InternalServerErrorException } from "@nestjs/common";
import { CategoriesService } from "./categories.service";
import { Category } from "./categories.model";

@Controller('/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

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