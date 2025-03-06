import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      minLength: 2,
      maxLength: 40,
      trim: true,
    },
    firstName: {
      type: String,
      minLength: 2,
      maxLength: 40,
      trim: true,
    },
    lastName: {
      type: String,
      minLength: 2,
      maxLength: 40,
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "Email address is required"],
      unique: true,
      match: [/\S+\@\S+\.\S+/, "Invalid email format"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: 6,
      select: false,
    },
    taskCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
