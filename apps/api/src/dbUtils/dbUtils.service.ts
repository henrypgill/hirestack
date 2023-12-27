import { User } from "@hirestack/database";
import { Injectable } from "@nestjs/common";
import {
  dummyManyUserGenerator,
  dummyUserGenerator,
} from "../core/dummyData/dummyUserGenerator.js";
import { database } from "../main.js";

@Injectable()
export class DbUtilsService {
  async addDummyUser(): Promise<User> {
    const dummyUser: User= dummyUserGenerator();

    const newUserId = await database.users.insertOne(dummyUser);
    const newUser = await database.users.findOne({_id: newUserId})

    return newUser;
  }

  async populateDatabase(count: number): Promise<User[]> {
    const dummyUsers = dummyManyUserGenerator(count)

    await database.users.insertMany(dummyUsers);
    const newUsers = await database.users.find({})
    return newUsers.toArray();
  }
}
