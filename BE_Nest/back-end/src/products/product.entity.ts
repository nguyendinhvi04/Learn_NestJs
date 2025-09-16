import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  brand: string;

  @Column({ type: 'text', nullable: false })
  model: string;

  @Column({ type: 'int', nullable: true })
  year: number;

  @Column({ type: 'numeric', nullable: false })
  price: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  image: string;

  @Column({ type: 'int', default: 1 })
  stock: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
