import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoryId: string,
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
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }

  @Put('id')
  update(@Param('id') id: number, @Body() categories: any) {
    return {
      id,
      categories,
    };
  }
}
