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
router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router
  .route("/profile/update")
  .post(isAutheticated, singleUpload, updateProfile);
router.route("/logout").get(logout);
export default router;
