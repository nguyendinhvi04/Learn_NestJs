import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: true })
  userId: number;

  @Column({ type: 'numeric', nullable: true })
  total: number;

  @Column({ type: 'text', nullable: true })
  status: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
