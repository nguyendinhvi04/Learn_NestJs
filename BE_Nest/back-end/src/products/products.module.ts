import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Car } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
