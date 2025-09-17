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
    if (!this.productsService) {
      throw new Error('Dữ liệu không tồn tại');
    }
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    if (!id) {
      throw new Error('id không tồn tại');
    }
    if (!this.productsService) {
      throw new Error('Dữ liệu không tồn tại');
    }
    return this.productsService.findOne(Number(id));
  }

  @Post()
  create(@Body() body: any) {
    if (!body) {
      throw new Error('Dữ liệu đẩy lên không tồn tại');
    }
    if (!this.productsService) {
      throw new Error('Dữ liệu không tồn tại');
    }
    return this.productsService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    if (!id) {
      throw new Error('id không tồn tại');
    }
    if (!body) {
      throw new Error('Dữ liệu đẩy lên không tồn tại để cập nhật');
    }
    return this.productsService.update(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    if (!id) {
      throw new Error('id không tồn tại');
    }
    if (!this.productsService) {
      throw new Error('Dữ liệu không tồn tại');
    }
    return this.productsService.remove(Number(id));
  }
}
