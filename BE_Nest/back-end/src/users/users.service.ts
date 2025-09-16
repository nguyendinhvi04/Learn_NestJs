import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepo: Repository<Users>,
  ) {}

  findAll() {
    return this.usersRepo.find();
  }

  findOne(id: number) {
    return this.usersRepo.findOneBy({ id });
  }

  create(user: Partial<Users>) {
    const newUser = this.usersRepo.create(user);
    return this.usersRepo.save(newUser);
  }

  async update(id: number, attrs: Partial<Users>) {
    await this.usersRepo.update(id, attrs);
    return this.usersRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.usersRepo.delete(id);
  }
}
