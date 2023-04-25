import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get('/:orderId/')
  getOrder(
    @Param('orderId', ParseIntPipe) orderId: number,
    @Query('limit') limit = 100,
    @Query('offset') offset = 50,
  ) {
    return {
      message: `order ID: ${orderId} limit: ${limit} offset ${offset}`,
    };
  }

  @Post()
  creacion(@Body() orders: any) {
    return {
      message: 'Creacion de orders',
      orders,
    };
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() orders: any) {
    return {
      id,
      orders,
    };
  }

  @Delete('id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }
}
