import { Injectable } from '@nestjs/common';
import {  dummyManyUserGenerator, dummyUserGenerator } from '../core/dummyData/dummyUserGenerator';
import { database } from '../main';
import {  Prisma, User } from '@hirestack/database';


@Injectable()
export class DbUtilsService {
  async addDummyUser(): Promise<User> {
    const dummyUserArgs: Prisma.UserCreateArgs = {
        data: dummyUserGenerator(),
      select: {
        id: true,
        name: true,
        pronouns: true,
        jobTitle: true,
        location: true,
        email: true,
        phone: true,
        linkedin: true,
        github: true,
        website: true,
        bio: true,
        education: true,
        skills: true,
        roles: true}
      }

    
    const newUser = await database.user.create(dummyUserArgs)
    return newUser
  }


  async populateDatabase(): Promise<User[]> {
    const dummyUsersArgs: Prisma.UserCreateManyArgs = {
        data: dummyManyUserGenerator(1)
      }

    await database.user.createMany(dummyUsersArgs)
    const newUsers = await database.user.findMany({include: {education: true, skills: true, roles: true}})
    return newUsers
    
  }
}
