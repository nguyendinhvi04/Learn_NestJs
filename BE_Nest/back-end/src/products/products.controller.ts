import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productsService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.productsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.productsService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productsService.remove(Number(id));
  }
}
