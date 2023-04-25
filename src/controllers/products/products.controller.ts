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
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get('/filter')
  getProductFilter() {
    return {
      message: 'Yo soy un filtro',
    };
  }

  @Get('/:productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Res() response: Response, @Param('productId') productId: string) {
    response.status(200).send({
      message: `Product ${productId}`,
    });
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
