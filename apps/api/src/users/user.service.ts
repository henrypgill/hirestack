import { FullUser, FullUserArgs, fullUserArgs } from '@hirestack/database';
import { Injectable } from '@nestjs/common';
import { database } from '../main.js';

@Injectable()
export class UserService {
  async getAll(): Promise<FullUser[]> {
    const users = await database.user.findMany<FullUserArgs>(fullUserArgs());
    return users
  }
}
