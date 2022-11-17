import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { Observable } from 'rxjs';
import { User } from 'src/Entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor() // @InjectRepository(User)
  // private userRepo: Repository<User>,
  {}
}

// findAll() {
//   return this.userRepo.find();
// }

// createUser(newUser) {
//   let user = new User();
//   user = newUser;

//   axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {},
//   });

//   return this.userRepo.create(user);
// }

// updateUser(id: number, updateUser: User) {
//   return this.userRepo.update(id, updateUser);
// }
// delete(id: number) {
//   return this.userRepo.delete(id);
// }
