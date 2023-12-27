import { User } from "@hirestack/database";
import { MongoClient } from "mongodb"

export type MongoDbConnection = ReturnType<typeof setupMongoClient>

export function setupMongoClient(database_url: string) {

    const client = new MongoClient(database_url)
    const db = client.db()
    const users = db.collection<User>("users")


    return {
        client,
        db,
        users,
    }
}