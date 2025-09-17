import 'pg';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'car-store',
  'nguyendv',
  '',
  {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: console.log, // Log query để debug, hoặc false để tắt
  }
);

export default sequelize;
