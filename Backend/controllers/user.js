import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, phone, password, role } = req.body;
    if (!fullname || !email || !phone || !role) {
      res.staus(400).json({
        msg: "Something is missing",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      res.staus(400).json({
        msg: "User already exists with this email.",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      password: hashedPassword,
      role,
    });
    res.status(200).json({
      msg: "Account Created Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !role) {
      res.staus(400).json({
        msg: "Something is missing",
        success: false,
      });
    }
    let user = await User.findOne({
      email,
    });
    if (!user) {
      return res.status(400).json({
        msg: "Incorrect email of password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        msg: "Incorrect email of password",
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
    const { fullname, email, phone, bio, skills } = req.body;
    const file = req.file;
    if (!fullname || !email || !phone || !bio || !skils) {
      res.staus(400).json({
        msg: "Something is missing",
        success: false,
      });
    }

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
