import Navbar from "@/components/navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

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

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center w-screen my-5">
        <div>
          <Label>Title</Label>
          <Input
            type="text"
            name="title"
            className="focus-visible:ring-offset-0 focus-visible:ring-0 my-2"
          />
        </div>
      </div>
    </>
  );
};

export default postJob;
