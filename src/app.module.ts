import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './shared/models/product.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb://localhost:27017/caravans'), // connection string
    CategoriesModule,
    UsersModule,
    ProductsModule,
    OrdersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
