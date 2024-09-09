import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  userLoginValidation,
  userSignupValidation,
  userUpdateValidation,
} from "../validation/user.validation.js";

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
        msg: "User already exists",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fullname,
      email,
      phone,
      password: hashedPassword,
      role,
    });
    await newUser.save();
    return res.status(200).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json([console.log(error)]);
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

    // Check if user exists and if password matches
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        msg: "Incorrect email or password",
        success: false,
      });
    }
    if (role != user.role) {
      return res.status(400).json({
        msg: "Account dosen't exist with current role",
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
      phoneNumber: user.phone,
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
        msg: `Welcome Back ${user.fullname} `,
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
      msg: "Logged out successfully",
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
        msg: "Validation failed",
        errors: response.error.errors,
        success: false,
      });
    }

    const { fullname, email, phone, profile } = response.data;

    const userId = req.id;

    // Find user by ID
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        msg: "User Not Found",
        success: false,
      });
    }

    // Update user fields if they are provided
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    if (profile) {
      if (profile.bio) user.profile.bio = profile.bio;
      if (profile.skills) user.profile.skills = profile.skills;
      if (profile.resume) user.profile.resume = profile.resume;
      if (profile.resumeOriginalName)
        user.profile.resumeOriginalName = profile.resumeOriginalName;
      if (profile.company) user.profile.company = profile.company;
      if (profile.profilePhoto)
        user.profile.profilePhoto = profile.profilePhoto;
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
      msg: "Profile updated successfully",
      user: updatedUser,
      success: true,
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({
      msg: "An error occurred while updating the profile",
      success: false,
    });
  }
};
