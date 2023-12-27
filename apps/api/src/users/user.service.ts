import { FullUser, FullUserArgs, fullUserArgs } from "@hirestack/database";
import { Injectable } from "@nestjs/common";
import { database } from "../main.js";
import { parseFilterString } from "./filter.js";

@Injectable()
export class UserService {
  async getAll(): Promise<FullUser[]> {
    const users = await database.user.findMany<FullUserArgs>(fullUserArgs());
    return users;
  }

  async getUnique(userId: string): Promise<FullUser> {
    const user = await database.user.findUnique({
      where: {
        id: userId,
      },
      ...fullUserArgs(),
    });
    return user;
  }

  async getFiltered(filterString: string): Promise<FullUser[]> {
    const { skills, education, experience } = parseFilterString(filterString);
    const skillsFilter = skills.map((skillFilter) => {
      return {};
    });

    const users = await database.user.findMany({
      ...fullUserArgs(),
      where: {
        skills: {
          every: {
            name: "University of Leeds",
            type: "language",
          },
        },
      },
    });

    return users;
  }
}
