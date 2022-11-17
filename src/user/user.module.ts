import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/Entities/product.entity';
import { User } from 'src/Entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
