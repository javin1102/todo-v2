require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//connectToDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB CONNECTED...");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

connectDB();

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log("Server is listening on Port 5000...."));
