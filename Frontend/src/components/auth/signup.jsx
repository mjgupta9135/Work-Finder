import React from "react";
import Navbar from "../shared/navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const signup = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border-gray-200 border-2 rounded-md p-4 my-10 "
        >
          <h1 className="font-bold text-xl mb-5 text-center pb-2">Signup</h1>
          <div>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Enter Your Full Name" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="abc@gmail.com" />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input type="text" placeholder="9876543210" />
          </div>
          <div>
            <Label>Password </Label>
            <Input type="password" placeholder="Enter Your Password" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <RadioGroup className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 my-5">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r1">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruiter"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="r2">Recruiter</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input accept="image/*" type="file" className="cursor-pointer" />
            </div>
          </div>
          <Button type="submit" className=" w-full my-4 bg-black text-white">
            Signup
          </Button>
          <span className="font-sm  font-display">
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

export default signup;
