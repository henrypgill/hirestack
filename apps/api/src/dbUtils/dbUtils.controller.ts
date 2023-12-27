import { Controller, Get, Param } from "@nestjs/common";
import { DbUtilsService } from "./dbUtils.service.js";
import { User } from "@hirestack/database";

@Controller()
export class DbUtilsController {
  constructor(private readonly dbUtilsService: DbUtilsService) {}

  @Get("/populateDatabase/users/:count")
  async populateUsers(@Param() params: { count: number }): Promise<User[]> {
    const newUsers: User[] = await this.dbUtilsService.populateDatabase(params.count)

    return newUsers;
  }
}
