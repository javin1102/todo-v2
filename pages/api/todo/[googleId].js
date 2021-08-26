import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "GET") {
    const client = await MongoClient.connect(process.env.NEXT_PUBLIC_DB_URI);
    const db = client.db();
    const userCollection = db.collection("users");
    const { googleId } = req.query;
    try {
      const user = await userCollection.findOne({
        googleId,
      });
      await client.close();
      return res.status(200).json(user);
    } catch (err) {
      console.error(err);
    }
    await client.close();
    return res.status(500).json({ msg: "Something went wrong!" });
  }
}
export default handler;
