import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const companyArray = [];

const postJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: 0,
    location: "",
    jobType: "",
    experience: 0,
    position: 0,
    companyId: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-screen my-5 ">
        <form
          action=""
          className="p-8 max-w-4xl border-gray-200 border-2 shadow-lg rounded-md mt-8"
        >
          <div className="grid grid-cols-2 gap-2   ">
            <div>
              <Label className="font-semibold">Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2"
              />
            </div>
            <div>
              <Label className="font-semibold">Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2"
              />
            </div>
            <div>
              <Label className="font-semibold">Requirements</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2"
              />
            </div>
            <div>
              <Label className="font-semibold">Salary (LPA)</Label>
              <Input
                type="number"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2"
              />
            </div>
            <div>
              <Label className="font-semibold">No of Positions</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2"
              />
            </div>
            <div>
              <Label className="font-semibold">Experience</Label>
              <Input
                type="number"
                name="experience"
                value={input.experience}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2"
              />
            </div>
            <div>
              <Label className="font-semibold">JobType</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2"
              />
            </div>
            <div>
              <Label className="font-semibold">Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2"
              />
            </div>

            {}
          </div>

          <Button className="text-white bg-black w-full mt-4">
            Post New Job
          </Button>

          {companyArray.length === 0 && (
            <p className="text-xs text-red-600 font-bold text-center my-3">
              * Please Register a Company first before posting Job
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default postJob;
