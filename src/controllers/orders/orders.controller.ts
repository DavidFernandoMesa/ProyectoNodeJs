import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get('/:orderId/')
  getOrder(
    @Param('orderId') orderId: number,
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
  update(@Param('id') id: number, @Body() orders: any) {
    return {
      id,
      orders,
    };
  }

  @Delete('id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
