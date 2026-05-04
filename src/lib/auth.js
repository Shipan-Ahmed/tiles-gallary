import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import dns from "node:dns/promises";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const client = new MongoClient(process.env.DB_URL);
const db = client.db("tile_vogue");



export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client
    }),
    emailAndPassword: {
        enabled: true,
    }
   
});