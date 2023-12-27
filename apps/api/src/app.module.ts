import { Module } from "@nestjs/common";
import { AppController } from "./app.controller.js";
import { AppService } from "./app.service.js";
import { DbUtilsModule } from "./dbUtils/dbUtils.module.js";
import { UserModule } from "./users/user.module.js";

@Module({
  imports: [UserModule, DbUtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
