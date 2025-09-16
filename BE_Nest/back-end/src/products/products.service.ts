import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Car)
    private carsRepo: Repository<Car>,
  ) {}

  findAll() {
    return this.carsRepo.find();
  }

  findOne(id: number) {
    return this.carsRepo.findOneBy({ id });
  }

  create(car: Partial<Car>) {
    const newCar = this.carsRepo.create(car);
    return this.carsRepo.save(newCar);
  }

  async update(id: number, attrs: Partial<Car>) {
    await this.carsRepo.update(id, attrs);
    return this.carsRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.carsRepo.delete(id);
  }
}
