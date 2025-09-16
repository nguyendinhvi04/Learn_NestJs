import { Injectable } from '@nestjs/common';
import { Car } from './products/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Car)
    private carsRepo: Repository<Car>,
  ) {}
  findAll() {
    return this.carsRepo.find();
  }
}
