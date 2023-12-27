import { User } from "@hirestack/database";
import { Injectable } from "@nestjs/common";
import { database } from "../main.js";

@Injectable()
export class UserPostService {
  async insertUser(userData: User): Promise<User> {
    const newUserId = await database.users.insertOne(userData);
    const newUser = await database.users.findOne({_id: newUserId})

    return newUser;
  }

  async insertManyUsers(userData: User[]) {
    const userIds = await database.users.insertMany(userData)
    const newUsers = await database.users.find({})
    return userIds.insertedIds
  }

}
