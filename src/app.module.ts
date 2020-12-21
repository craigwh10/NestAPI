import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductController
  ],
  providers: [ProductService],
})
export class AppModule { }
