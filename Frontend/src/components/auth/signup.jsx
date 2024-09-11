import React, { useState } from "react";
import axios from "axios";
import Navbar from "../shared/navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    file: "",
  });
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("fullname", input.fullname || "");
    formData.append("email", input.email || "");
    formData.append("phone", input.phone || "");
    formData.append("password", input.password || "");
    formData.append("role", input.role || "");

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const response = await axios.post(
        `${USER_API_END_POINT}/register`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        navigate("/login");
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        const errorData = error.response.data;
        console.log(errorData);
        if (Array.isArray(errorData.errors)) {
          // Display each error message if errors is an array
          errorData.errors.forEach((err) => {
            toast.error(err.message);
          });
        } else if (errorData.msg) {
          toast.error(errorData.msg);
        } else {
          // Fallback error message
          toast.error("An unexpected error occurred");
        }
      } else if (error.request) {
        // Handle no response received
        toast.error("No response received from server");
      } else {
        // Handle error in setting up the request
        toast.error(error.message);
      }
    }
  };

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFilehandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border-gray-200 border-2 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center pb-2">Signup</h1>
          <div>
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter Your Full Name"
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="abc@gmail.com"
            />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input
              type="text"
              value={input.phone}
              name="phone"
              onChange={changeEventHandler}
              placeholder="9876543210"
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter Your Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <RadioGroup className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 my-5">
                  <Input
                    type="radio"
                    name="role"
                    value="student" // Match with server expected value
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label>Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter" // Match with server expected value
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label>Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                name="file"
                onChange={changeFilehandler}
                className="cursor-pointer"
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4 bg-black text-white">
            Signup
          </Button>
          <span className="font-sm font-display">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-800 font-bold font-display">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
