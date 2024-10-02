import React, { useState } from "react";
import Navbar from "../navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/slices/companySlice";
import { toast } from "sonner";

const CreateCompany = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { name: companyName.trim() },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        if (Array.isArray(errorData.errors)) {
          errorData.errors.forEach((err) => {
            toast.error(err.message);
          });
        } else if (errorData.message) {
          toast.error(errorData.message);
        } else {
          toast.error("An unexpected error occurred");
        }
      } else if (error.request) {
        toast.error("No response received from server");
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-500">
            What would you like to give your company name? You can change this
            later
          </p>
        </div>

        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          value={companyName} // Bind the state to input value
          onChange={(e) => setCompanyName(e.target.value)} // Update state on input change
          placeholder="Job Hunt, Microsoft etc."
        />

        <div className="flex items-center gap-2 my-10">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button onClick={registerNewCompany} className="bg-black text-white">
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateCompany;
