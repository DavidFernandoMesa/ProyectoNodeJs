import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { ProductsService } from './../../services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private ProductsService: ProductsService) {}

  @Get('/filter')
  getProductFilter() {
    return {
      message: 'Yo soy un filtro',
    };
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(
    @Res() response: Response,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    /*response.status(200).send({
      message: `Product ${productId}`,
    });*/
    return this.ProductsService.findOne(productId);
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    /*return {
      message: `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };*/
    return this.ProductsService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    /*return {
      message: 'accion de crear',
      payload,
    };*/
    return this.ProductsService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    /*return {
      id,
      payload,
    };*/
    return this.ProductsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    /*return {
      id,
    };*/
    return this.ProductsService.delete(id);
  }
}
