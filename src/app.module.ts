import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from '@nestjs/mongoose'
import { CategoriesModule } from './categories/categories.module';
import { StatusesModule } from './statuses - delete later/statuses.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/product.module';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb://localhost:27017/caravans'),
    CategoriesModule,
    StatusesModule,
    UsersModule,
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
