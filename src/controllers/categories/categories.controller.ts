import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId', ParseIntPipe) categoryId: string,
    @Param('productId') productId: string,
  ) {
    return {
      message: `Product ${productId} AND ${categoryId}`,
    };
  }

  @Post()
  create(@Body() categories: any) {
    return {
      message: 'Creacion de categorias',
      categories,
    };
  }

  @Delete('id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }

  @Put('id')
  update(@Param('id', ParseIntPipe) id: number, @Body() categories: any) {
    return {
      id,
      categories,
    };
  }
}
