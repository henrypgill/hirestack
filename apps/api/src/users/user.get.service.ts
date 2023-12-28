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
    const user = await database.users.findOne({_id: new ObjectId(userId)})
    return user;
  }

  async getFiltered(filterString: string): Promise<User[]> {
    const { skills, education, experience } = parseFilterString(filterString);
    const skillsFilter = skills.map((skillFilter) => {
      return {};
    });


    return this.getAll();
  }
}
