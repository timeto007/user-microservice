import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from 'src/Entities/user.entity';
import { userPost } from 'src/interfaces/user.interface';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UserService } from './user.service';

@Controller('user')
export class UserController {}
//   constructor(private userService: UserService) {}

// @Get()
// findAll(): Promise<User[]> {
//   return this.userService.findAll();
// }

// @Post()
// createUser(@Body() body: userPost) {
//   return this.userService.createUser(body);
// }

// @Delete(':id')
// delete(@Param('id') id: number) {
//   return this.userService.delete(id);
// }

// @Put(':id')
// update(@Param('id') id: number, @Body() body: userPost) {
//   return this.userService.updateUser(id, body);
// }
