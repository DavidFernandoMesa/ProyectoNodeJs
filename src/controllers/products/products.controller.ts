import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/filter')
  getProductFilter() {
    return {
      message: 'Yo soy un filtro',
    };
  }

  @Get('/:productId')
  getProduct(@Param('productId') productId: string) {
    return {
      message: `Product ${productId}`,
    };
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
}
