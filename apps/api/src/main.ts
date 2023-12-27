import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import dotenv from "dotenv";

import { MongoClient } from "mongodb";


export const database = new MongoClient(process.env.DATABASE_URL)

async function bootstrap() {

  console.log("Connecting to database...");
  await database.connect();
  console.log("Connected to database");


  console.log("Starting up Nest Service");
  const app = await NestFactory.create(AppModule);
  console.log("Nest service started, API ready to go");




  console.log("Opening connection... ... ...");
  
  const port = process.env.PORT || 4000;
  // const port = 4000;
  await app.listen(port);
  console.log("Connection open. Listening on port: " + port);
}
bootstrap().catch(async (e) => {
  console.error(e);
  await database.close()
  process.exit(1);
});
