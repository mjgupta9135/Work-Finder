import express from "express";
import {
  allJobPosted,
  getJobById,
  postJob,
  getAllJobs,
} from "../controllers/job.controller.js";
import isAutheticated from "../middlewares/user.middleware.js";

const router = express.Router();
router.route("/post").post(isAutheticated, postJob);
router.route("/get").get(getAllJobs);
router.route("/getAdminJobs").get(isAutheticated, allJobPosted);
router.route("/get/:id").get(getJobById);

export default router;
