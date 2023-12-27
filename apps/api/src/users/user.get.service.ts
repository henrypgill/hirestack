import { User } from "@hirestack/database";
import { Injectable } from "@nestjs/common";
import { database } from "../main.js";
import { parseFilterString } from "./filter.js";
import { ObjectId } from "mongodb";

@Injectable()
export class UserGetService {
  async getAll(): Promise<User[]> {
    const usersCursor = await database.users.find({});
    const users = await usersCursor.toArray()
    return users;
  }

  async getUnique(userId: string): Promise<User> {
    const o_id = new ObjectId
    const user = await database.users.find({_id: userId})
    console.log(user.toArray())
    return user.toArray()[0];
  }

  async getFiltered(filterString: string): Promise<User[]> {
    const { skills, education, experience } = parseFilterString(filterString);
    const skillsFilter = skills.map((skillFilter) => {
      return {};
    });


    return this.getAll();
  }
}
