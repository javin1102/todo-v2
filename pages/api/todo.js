// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const { googleId, todoList } = req.body;
    const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URI);
    const db = client.db();
    const userCollection = db.collection("users");
    const query = { googleId };
    const update = { $set: { todoList } };
    const options = { upsert: true };
    await userCollection.updateOne(query, update, options);
    await client.close();
    return res.status(201).json(req.body);
  }
}

export default handler;
