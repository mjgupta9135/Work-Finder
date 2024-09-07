import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userValidation from "../validation/user.validation.js";

export const register = async (req, res) => {
  try {
    const response = userValidation.safeParse(req.body);
    if (!response.success) {
      // Handle Zod validation errors
      return res.status(400).json({
        errors: response.error.errors,
        success: false,
      });
    }

    const { fullname, email, phone, password, role } = response.data;
    if (role != "Student") {
      return res.status(400).json({
        msg: "Please Select student role",
      });
    }
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
    const response = userValidation.safeParse(req.body);
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
    console.log(req.body);
    const response = userValidation.safeParse(req.body);
    const { fullname, email, bio, profile } = response.data;
    const skillsArray = skills.split(",");
    const userId = req.id;
    let user = await User.findById(userId);
    if (!user) {
      res.staus(400).json({
        msg: "User Not Found",
        success: false,
      });
    }
    (user.fullname = fullname),
      (user.email = email),
      user.phone,
      (user.profile.bio = bio),
      (user.profile.skills = skillsArray);

    await user.save();
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phone,
      role: user.role,
      profile: user.profile,
    };
    res.status(200).json({
      msg: "Profile updated successfully",
      user,
      success: true,
    });
  } catch (error) {}
};
