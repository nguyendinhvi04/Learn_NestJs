import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ordersService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    return this.ordersService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.ordersService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.ordersService.remove(Number(id));
  }
}
