import express from "express";
import isAutheticated from "../middlewares/user.middleware.js";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controllers.js";

const router = express.Router();
router.route("/register").post(isAutheticated, registerCompany);
router.route("/get").get(isAutheticated, getCompany);
router.route("/get/:id").get(isAutheticated, getCompanyById);
router.route("/update/:id").put(isAutheticated, updateCompany);
export default router;
