import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: String,
    email: String,
    phone: String,
    password: String,
    role: String,
    profile: {
      bio: String,
      skills: String,
      resume: String,
      resumeOriginalName: String,
      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },
      profilePhoto: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
