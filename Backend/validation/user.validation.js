import { z } from "zod";

const userValidation = z.object({
  fullname: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid Email Address" }),
  phone: z.string().min(10, {
    message: "Phone Number Must be at least 10 digits",
  }),
  password: z.string().min(6, {
    message: "Password is required and must be at least 6 characters",
  }), // Make sure password is required
  role: z.enum(["Student", "Recruiter"], {
    message: "Please choose correct role",
  }), // Make sure to match the case with Mongoose
  profile: z
    .object({
      bio: z.string().optional(),
      skills: z.string().optional(),
      resume: z.string().optional(),
      resumeOriginalName: z.string().optional(),
      company: z.string().optional(), // Adjust if it's supposed to be an ObjectId
      profilePhoto: z.string().optional(),
    })
    .optional(),
});

export default userValidation;
