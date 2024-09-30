import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {
  userLoginValidation,
  userSignupValidation,
  userUpdateValidation,
} from "../validation/user.validation.js";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
  try {
    const response = userSignupValidation.safeParse(req.body);
    if (!response.success) {
      // Handle Zod validation errors
      return res.status(400).json({
        errors: response.error.errors,
        success: false,
      });
    }

    const { fullname, email, phone, password, role } = response.data;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        message: "User already exists",
        success: false,
      });
    }
    const file = req.file;
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullname,
      email,
      phone,
      password: hashedPassword,
      role,
      profile: {
        profilePhoto: cloudResponse.secure_url,
      },
    });
    await newUser.save();
    return res.status(200).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json([phone(error)]);
  }
};

export const login = async (req, res) => {
  try {
    const response = userLoginValidation.safeParse(req.body);

    if (!response.success) {
      return res.status(400).json({
        errors: response.error.errors,
        success: false,
      });
    }

    const { email, password, role } = response.data;
    let user = await User.findOne({ email });

    const hashedPass = await bcrypt.compare(password, user.password);
    // Check if user exists and if password matches
    if (!user || !hashedPass) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    if (role != user.role) {
      return res.status(400).json({
        message: "Account dosen't exist with current role",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
      role: user.role,
      profile: user.profile,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome Back ${user.fullname} `,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully",
      success: true,
    });
  } catch (error) {}
};

export const updateProfile = async (req, res) => {
  try {
    // Validate request body
    const response = userUpdateValidation.safeParse(req.body);

    // Handle validation errors
    if (!response.success) {
      return res.status(400).json({
        message: "Validation failed",
        errors: response.error.errors,
        success: false,
      });
    }

    // Check if the file exists
    const file = req.file;
    let cloudResponse;

    if (file) {
      const fileUri = getDataUri(file);
      cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    }

    const { fullname, email, phone } = response.data;
    const data = req.body;
    const userId = req.id;

    // Find user by ID
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User Not Found",
        success: false,
      });
    }

    // Update user fields if they are provided
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phone) user.phone = phone;

    user.profile.bio = data.bio ?? "";
    user.profile.skills = data.skills ?? [];

    if (data.company && mongoose.Types.ObjectId.isValid(data.company)) {
      user.profile.company = data.company;
    } else if (data.company === undefined || data.company === null) {
      user.profile.company = null;
    }

    // Update resume if file was uploaded
    if (cloudResponse) {
      user.profile.resume = cloudResponse.secure_url;
      user.profile.resumeOriginalName = file.originalname;
    }

    // Save the updated user
    await user.save();

    // Prepare user object for response
    const updatedUser = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phone: user.phone,
      role: user.role,
      profile: user.profile,
    };

    // Send success response
    res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
      success: true,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({
      message: "An error occurred while updating the profile",
      success: false,
    });
  }
};
