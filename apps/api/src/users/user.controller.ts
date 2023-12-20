import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service.js';
import { FullUser } from '@hirestack/database';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/users")
  async getAllUsers(): Promise<FullUser[]> {
    const users = await this.userService.getAll();
    return users
  }

  @Get("/users/:userId")
  async getUser(@Param() params: {userId: string}): Promise<FullUser> {
    const user = await this.userService.getUnique(params.userId);
    return user
  }
} 