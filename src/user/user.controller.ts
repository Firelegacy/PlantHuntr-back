import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {
  }

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  @Get('/:id')
  findUser(@Param(('id')) id) {
    return this.userService.findOne(id);
  }
}
