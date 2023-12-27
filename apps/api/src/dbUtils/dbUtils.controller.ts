import { Controller, Get, Param } from "@nestjs/common";
import { DbUtilsService } from "./dbUtils.service.js";
import { User } from "@hirestack/database";

@Controller()
export class DbUtilsController {
  constructor(private readonly dbUtilsService: DbUtilsService) {}

  @Get("/populateDatabase/users/:count")
  async populateUsers(@Param() params: { count: number }): Promise<User[]> {
    const newUsers: User[] = [];
    for (let i = 0; i < params.count; i++) {
      newUsers.push(await this.dbUtilsService.addDummyUser());
    }

    return newUsers;
  }
}
