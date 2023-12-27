import { Injectable } from "@nestjs/common";
import {
  dummyManyUserGenerator,
  dummyUserGenerator,
} from "../core/dummyData/dummyUserGenerator.js";
import { database } from "../main.js";
import { Prisma, User, fullUserArgs } from "@hirestack/database";

@Injectable()
export class DbUtilsService {
  async addDummyUser(): Promise<User> {
    const dummyUserArgs: Prisma.UserCreateArgs = {
      data: dummyUserGenerator(),
      ...fullUserArgs(),
    };

    const newUser = await database.user.create(dummyUserArgs);
    return newUser;
  }

  async populateDatabase(): Promise<User[]> {
    const dummyUsersArgs: Prisma.UserCreateManyArgs = {
      data: dummyManyUserGenerator(1),
    };

    await database.user.createMany(dummyUsersArgs);
    const newUsers = await database.user.findMany({
      include: { education: true, skills: true, roles: true },
    });
    return newUsers;
  }
}
