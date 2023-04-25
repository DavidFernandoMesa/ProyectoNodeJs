import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get('/:brandId/')
  getBrand(@Param('brandId') brandId: number) {
    return {
      message: `brand ${brandId}`,
    };
  }

  @Post()
  create(@Body() brands: any) {
    return {
      message: 'accion de modelo',
      brands,
    };
  }
}
