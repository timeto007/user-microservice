import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from './Entities/product.entity';
import { User } from './Entities/user.entity';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'ecomerse',
  synchronize: true,
  logging: true,
  entities: [User, Product],
};
