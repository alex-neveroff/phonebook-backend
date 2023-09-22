import { Schema, model } from "mongoose";
import { handleMongooseError, validateAtUpdate } from "../middlewars/index.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("findOneAndUpdate", validateAtUpdate);
userSchema.post("findOneAndUpdate", handleMongooseError);
userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

export default User;
