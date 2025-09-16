import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../src/users/user.entity';
import { UsersModule } from '../src/users/users.module';

describe('Database Connection (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'nguyendv',
          database: 'car-store',
          entities: [Users],
        }),
        UsersModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Tạo user ', async () => {
    const res = await request(app.getHttpServer())
      .post('/users')
      .send({
        name: 'Test User',
        email: 'test@test.com',
        phone: '1234567890',
        password: '123456',
      })
      .expect(201);

    expect(res.body).toHaveProperty('id');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(res.body.email).toBe('test@test.com');
  });

  it('lấy danh sách users', async () => {
    const res = await request(app.getHttpServer()).get('/users').expect(200);

    expect(Array.isArray(res.body)).toBe(true);
  });
});
