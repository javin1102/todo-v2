import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { MongoClient } from "mongodb";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
      profileUrl: "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
      id: "google",
      async profile(profile) {
        //save user to DB
        const client = await MongoClient.connect(
          process.env.NEXT_PUBLIC_DB_URI
        );
        const db = client.db();
        const userCollection = db.collection("users");
        const user = await userCollection.findOne({ googleId: profile.id });
        if (!user) {
          await userCollection.insertOne({
            googleId: profile.id,
            todoList: [],
          });
        }
        client.close();

        return {
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          id: profile.id,
        };
      },
    }),

    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
  callbacks: {
    session: async (session, user) => {
      session.id = user.sub;
      return Promise.resolve(session);
    },
  },
});
