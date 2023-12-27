import { Module } from "@nestjs/common";
import { UserController } from "./user.controller.js";
import { UserGetService } from "./user.get.service.js";
import { UserPostService } from "./user.post.service.js";

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserGetService, UserPostService],
})
export class UserModule {}
