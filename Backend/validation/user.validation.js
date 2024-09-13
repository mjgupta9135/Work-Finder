import { z } from "zod";

export const userSignupValidation = z.object({
  fullname: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid Email Address" }),
  phone: z.string().min(10, {
    message: "Phone Number Must be at least 10 digits",
  }),
  password: z.string().min(6, {
    message: "Password is required and must be at least 6 characters",
  }), // Make sure password is required
  role: z.enum(["student", "recruiter"], {
    message: "Please choose correct role",
  }), // Make sure to match the case with Mongoose
});

export const userLoginValidation = z.object({
  email: z.string().email({ message: "Invalid Email Address" }),
  password: z.string().min(6, {
    message: "Password is required and must be at least 6 characters",
  }), // Make sure password is required
  role: z.enum(["student", "recruiter"], {
    message: "Please choose correct role",
  }), // Make sure to match the case with Mongoose
});

export const userUpdateValidation = z.object({
  fullname: z.string().min(1, { message: "Full name is required" }).optional(),
  email: z.string().email({ message: "Invalid Email Address" }).optional(),
  phone: z
    .string()
    .min(10, {
      message: "Phone Number Must be at least 10 digits",
    })
    .optional(),
  profile: z
    .object({
      bio: z.string().optional(),
      skills: z.array(z.string()).optional(),
      resume: z.string().optional(),
      resumeOriginalName: z.string().optional(),
      company: z.string().optional(),
      profilePhoto: z.string().optional(),
    })
    .optional(),
});
