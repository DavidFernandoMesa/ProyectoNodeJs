import {
  Controller,
  Post,
  Get,
  Param,
  Query,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:idUser')
  user(
    @Param('idUser') idUser: number,
    @Query('limit') limit = 50,
    @Query('offset') offset = 10,
  ) {
    return {
      idUser,
      limit,
      offset,
    };
  }

  @Post()
  create(@Body() users: any) {
    return {
      message: 'Creacion de usuarios',
      users,
    };
  }

  @Put('id')
  update(@Param('id') id: number, @Body() users: any) {
    return {
      id,
      users,
    };
  }

  @Delete('id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
