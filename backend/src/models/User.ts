import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
  },
  email: { type: String, trim: true, unique: true },
  password: { type: String, trim: true, minLength: 5 },
  role: { type: Number, default: 0 },
  image: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
