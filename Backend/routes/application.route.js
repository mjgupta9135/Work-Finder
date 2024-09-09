import express from "express";
import isAutheticated from "../middlewares/user.middleware.js";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controllers.js";

const router = express.Router();
router.route("/apply/:id").get(isAutheticated, applyJob);
router.route("/get").get(isAutheticated, getAppliedJobs);
router.route("/:id/applicants").get(isAutheticated, getApplicants);
router.route("/status/:id/update").post(isAutheticated, updateStatus);
export default router;
