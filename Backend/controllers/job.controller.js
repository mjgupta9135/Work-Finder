import { Job } from "../models/job.model.js";
import { jobPostValidation } from "../validation/job.validation.js";

export const postJob = async (req, res) => {
  try {
    const response = jobPostValidation.safeParse(req.body);
    if (!response.success) {
      // Handle Zod validation errors
      return res.status(400).json({
        errors: response.error.errors,
        success: false,
      });
    }
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = response.data;
    const userId = req.id;
    const job = await Job.create({
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      company: companyId,
      createdBy: userId,
    });
    return res.status(201).json({
      message: "New Job Created Successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });
    if (!jobs) {
      res.status(404).json({
        message: "Job Not Found",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate([
      { path: "application" },
      { path: "company" },
    ]);
    if (!job) {
      res.status(404).json({
        message: "Job Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const allJobPosted = async (req, res) => {
  try {
    const userId = req.id;
    const jobs = await Job.find({
      createdBy: userId,
    }).populate({
      path: "company",
    });
    if (!jobs) {
      res.status(404).json({
        message: "Job Not Found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
