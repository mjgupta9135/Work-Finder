import mongoose from "mongoose";
const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      name: required,
    },
    description: {
      type: String,
      name: required,
    },
    website: {
      type: String,
      name: required,
    },
    location: {
      type: String,
      name: required,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Company = mongoose.model("Company", companySchema);
