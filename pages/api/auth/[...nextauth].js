import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { MongoClient } from "mongodb";
import user from "../user";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
      async profile(profile) {
        //save user to DB
        const client = await MongoClient.connect(
          process.env.NEXT_PUBLIC_DB_URI
        );
        const db = client.db();
        const userCollection = db.collection("users");
        const user = await userCollection.findOne({ googleId: profile.id });
        if (!user) {
          await userCollection.insertOne({ googleId: profile.id });
        }
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),

    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
  // jwt: {
  //   signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
  // },
});
