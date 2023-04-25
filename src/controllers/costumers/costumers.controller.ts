import {
  Controller,
  Get,
  Param,
  Query,
  Body,
  Post,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

@Controller('costumers')
export class CostumersController {
  @Get('/:costumersId/')
  getCostumer(
    @Param('costumersId', ParseIntPipe) costumersId: number,
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

  @Delete('id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }

  @Put('id')
  update(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }
}
