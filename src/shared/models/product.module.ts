import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductSchema } from "../../products/product.model";
import { ProductsController } from "../../products/product.controller";
import { ProductsService } from "../../products/product.service";

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