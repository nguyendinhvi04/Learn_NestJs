import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepo: Repository<Order>,
  ) {}

  findAll() {
    return this.ordersRepo.find();
  }

  findOne(id: number) {
    return this.ordersRepo.findOneBy({ id });
  }

  create(order: Partial<Order>) {
    const newOrder = this.ordersRepo.create(order);
    return this.ordersRepo.save(newOrder);
  }

  async update(id: number, attrs: Partial<Order>) {
    await this.ordersRepo.save({ id, ...attrs });
    return this.ordersRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.ordersRepo.delete(id);
  }
}
