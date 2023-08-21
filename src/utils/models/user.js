import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    mobileNumber: {
      type: Object,
      default: {
        value: "",
        verified: false,
      },
    },
    verifiedByEmail: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const UserSchema = mongoose.models.User || mongoose.model("User", userSchema);
export default UserSchema;
