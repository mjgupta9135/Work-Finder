import express from "express";
import { login, register, updateProfile } from "../controllers/user.js";
import isAutheticated from "../middlewares/user.middleware.js";

const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAutheticated, updateProfile);
export default router;
