import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service.js";
import { FullUser } from "@hirestack/database";
import { parseFilterString } from "./filter.js";

@Controller("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/all")
  async getAllUsers(): Promise<FullUser[]> {
    const users = await this.userService.getAll();
    return users;
  }

  @Get("/unique/:userId")
  async getUser(@Param() params: { userId: string }): Promise<FullUser> {
    const user = await this.userService.getUnique(params.userId);
    return user;
  }

  @Get("/filter/:filters")
  async getFilteredUsers(@Param() params: { filters: string }) {
    //: Promise<FullUser[]> {
    console.log(
      "============================================================================",
    );
    const user = await this.userService.getFiltered(params.filters);
    return user;
    return parseFilterString(params.filters);
  }
}
