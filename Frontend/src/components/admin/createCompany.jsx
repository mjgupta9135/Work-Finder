import React from "react";
import Navbar from "../navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const createCompany = () => {
  const navigate = useNavigate();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
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
          placeholder="Job Hunt, Microsoft etc."
        />

        <div className="flex items-center gap-2 my-10">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button className="bg-black text-white">Continue</Button>
        </div>
      </div>
    </>
  );
};

export default createCompany;
