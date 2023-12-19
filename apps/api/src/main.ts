import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
// import dotenv from "dotenv";

import { PrismaClient } from "@prisma/client";

// dotenv.config();

export const database = new PrismaClient();


async function bootstrap() {
  console.log("Connecting to database...");
  const app = await NestFactory.create(AppModule);
  console.log("Connected to database");
  // const port = process.env.PORT || 4000;
  const port = 4000;
  await app.listen(port);
  console.log("Listening on port: " + port);
}
bootstrap()
.catch(async (e) => {
    console.error(e);
    process.exit(1);
});
