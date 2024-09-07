import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: String,
    email: String,
    phone: String,
    password: String,
    role: String,
    profile: {
      bio: { type: String, default: "" },
      skills: { type: [String], default: [] }, // Array of strings, empty by default
      resume: { type: String, default: "" },
      resumeOriginalName: { type: String, default: "" },
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        default: null,
      },
      profilePhoto: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
