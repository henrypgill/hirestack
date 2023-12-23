import { EducationFilter, EducationLevel, FullUser, FullUserArgs, SkillFilter, UserFilterArgs, fullUserArgs } from '@hirestack/database';
import { Injectable } from '@nestjs/common';
import { database } from '../main.js';



@Injectable()
export class UserService {

  async getAll(): Promise<FullUser[]> {
    const users = await database.user.findMany<FullUserArgs>(fullUserArgs());
    return users
  }

  async getUnique(userId: string): Promise<FullUser> {
    const user = await database.user.findUnique({
      where: {
        id: userId
      },
      ...fullUserArgs()
  });
    return user
  }


  async getFilteredUsers(filterArgs: UserFilterArgs): Promise<FullUser[]> {



    const users = await database.user.findMany({
      ...fullUserArgs(),
      where: {

      }
    })
  }

}
