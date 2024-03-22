import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductSchema } from "./product.model";
import { ProductsController } from "./product.controller";
import { ProductsService } from "./product.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ // importing the Schema
      name: 'Product',
      schema: ProductSchema,
    }]),
  ],
  controllers: [
    ProductsController
  ],
  providers: [
    ProductsService
  ]
}) export class ProductsModule{}