const mongoose = require("moongose");
const UserSchema = new mongoose.Schema({
  googleID: String,
});

export const User = new mongoose.model("User", UserSchema);
