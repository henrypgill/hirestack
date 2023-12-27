import { User } from "@hirestack/database";
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { parseFilterString } from "./filter.js";
import { UserGetService } from "./user.get.service.js";
import { UserPostService } from "./user.post.service.js";

@Controller("/users")
export class UserController {
  constructor(private readonly userGetService: UserGetService, private readonly userPostService: UserPostService) {}

  @Get("/")
  async getAllUsers(): Promise<User[]> {
    const users = await this.userGetService.getAll();
    return users;
  }

  @Get("/:userId")
  async getUser(@Param() params: { userId: string }): Promise<User> {
    const user = await this.userGetService.getUnique(params.userId);
    console.log("tried this id:", params.userId)
    return user;
  }

  @Get("/filter/:filters")
  async getFilteredUsers(@Param() params: { filters: string }) {
    console.log(
      "============================================================================",
    );
    const user = await this.userGetService.getFiltered(params.filters);
    return user;
    return parseFilterString(params.filters);
  }

  @Post("/")
  async insertOne(@Body() body: User) {
    const newUserId = this.userPostService.insertUser(body)
  }
}
