import { Company } from "../models/company.model.js";
import cloudinary from "../utils/cloudinary.js";
import getDataUri from "../utils/datauri.js";
import {
  companyRegisterValidaton,
  updateCompanyValidation,
} from "../validation/company.validation.js";

export const registerCompany = async (req, res) => {
  try {
    let response = companyRegisterValidaton.safeParse(req.body);
    if (!response.success) {
      // Handle Zod validation errors
      return res.status(400).json({
        errors: response.error.errors,
        success: false,
      });
    }
    const companyName = response.data.name;
    let company = await Company.findOne({
      name: companyName,
    });
    if (company) {
      return res.status(400).json({
        message: "You can't add register same company",
        success: false,
      });
    }
    company = await Company.create({
      name: companyName,
      userId: req.id,
    });
    return res.status(201).json({
      message: "Company Registered Successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({
      userId,
    });
    if (!companies) {
      res.status(404).json({
        message: "Companies not found",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//get company by id

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {}
};

export const updateCompany = async (req, res) => {
  try {
    // Validate request body using Zod
    const response = updateCompanyValidation.safeParse(req.body);
    if (!response.success) {
      // Handle validation errors
      return res.status(400).json({
        errors: response.error.errors,
        success: false,
      });
    }

    const { name, description, website, location } = response.data;

    // Check if the file is present
    let logo = null;
    if (req.file) {
      const fileUri = getDataUri(req.file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      logo = cloudResponse.secure_url;
    }

    const updateData = { name, description, website, location };
    if (logo) {
      updateData.logo = logo; // Only add logo if it was uploaded
    }

    // Update company in the database
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company information updated successfully",
      success: true,
      company,
    });
  } catch (error) {
    console.error("Error updating company:", error);
    return res.status(500).json({
      message: "An error occurred while updating the company",
      success: false,
    });
  }
};
