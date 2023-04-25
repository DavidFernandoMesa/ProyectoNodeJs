import { Controller, Get, Param, Query, Body, Post } from '@nestjs/common';

@Controller('costumers')
export class CostumersController {
  @Get('/:costumersId/')
  getCostumer(
    @Param('costumersId') costumersId: number,
    @Query('limit') limit = 50,
    @Query('offset') offset = 10,
  ) {
    return {
      message: `costumers ID: ${costumersId} limit: ${limit} offset ${offset}`,
    };
  }

  @Post()
  create(@Body() costumers: any) {
    return {
      message: 'Creacion de costumers',
      costumers,
    };
  }
}
