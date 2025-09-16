import { Controller } from '@nestjs/common';
import { Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.usersService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.usersService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(Number(id));
  }
}
