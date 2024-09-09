import { Company } from "../models/company.model.js";
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
    console.log(err);
  }
};

//get company by id

export const getCompanyById = async (req, res) => {
  try {
    console.log(req.params);
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
    const response = updateCompanyValidation.safeParse(req.body);
    if (!response.success) {
      // Handle Zod validation errors
      return res.status(400).json({
        errors: response.error.errors,
        success: false,
      });
    }
    const { name, description, website, location } = response.data;
    // const file=req.file;

    const updateData = { name, description, website, location };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!company) {
      return res.status(404).json({
        message: "Company Not found",
      });
    }
    return res.status(200).json({
      message: "Company Information updated",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
