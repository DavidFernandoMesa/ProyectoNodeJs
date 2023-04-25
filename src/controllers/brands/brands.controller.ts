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

@Controller('brands')
export class BrandsController {
  @Get('/:brandId/')
  getBrand(@Param('brandId', ParseIntPipe) brandId: number) {
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

  @Put('id')
  update(@Param('id', ParseIntPipe) id: number, @Body() brands: any) {
    return {
      id,
      brands,
    };
  }

  @Delete('id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }
}
