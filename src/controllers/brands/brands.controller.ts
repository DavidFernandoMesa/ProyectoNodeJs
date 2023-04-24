import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get('/:brandId/')
  getBrand(@Param('brandId') brandId: number) {
    return {
      message: `brand ${brandId}`,
    };
  }
}
