import React, { useState } from "react";
import Navbar from "../shared/navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (response.data.success) {
        navigate("/");
        console.log(response.data);
        toast.success(response.data.msg);
      }
    } catch (error) {
      console.log(error);
      // Error handling for displaying toast notifications
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

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border-gray-200 border-2 rounded-md p-4 my-10 "
        >
          <h1 className="font-bold text-xl mb-5 text-center pb-2">Login</h1>

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
            <Label>Password </Label>
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
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
          <Button type="submit" className=" w-full my-4 bg-black text-white">
            Login
          </Button>
          <span className="font-sm  font-display">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-800 font-bold font-display">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
