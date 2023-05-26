import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

const port = process.env.DB_PORT as number | undefined;

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: port,
  entities: ['./src/@core/**/infra/database/*.{ts,js}'],
  migrations: ['./src/config/database/migrations/*.{ts,js}']
});