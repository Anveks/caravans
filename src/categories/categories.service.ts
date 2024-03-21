import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category } from "./categories.model";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<Category>
  ){}

  // getting all categories:
  async getAllCategories(): Promise<Category[]>{
    let categories = [];
    try {
      categories = await this.categoryModel.find();
      return categories;
    } catch (err: any) {
      if (categories.length === 0) throw new InternalServerErrorException('Error while fetching categories');
    };
  }

}