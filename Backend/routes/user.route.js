import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controller.js";
import isAutheticated from "../middlewares/user.middleware.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

// Registration route
router.route("/register").post(singleUpload, register);

// Login route
router.route("/login").post(login);

// Profile update route with authentication and file upload
router
  .route("/profile/update")
  .post(isAutheticated, singleUpload, updateProfile);

// Logout route
router.route("/logout").get(logout);
export default router;
