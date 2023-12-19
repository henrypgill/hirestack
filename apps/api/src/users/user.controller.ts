import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service.js';
import { FullUser } from '@hirestack/database';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/users")
  async getUser(): Promise<FullUser[]> {
    const users = await this.userService.getAll();
    return users
  }
} 