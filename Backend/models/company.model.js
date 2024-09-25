import mongoose from "mongoose";
const companySchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    website: String,
    location: String,
    logo: { type: String, default: "" },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
