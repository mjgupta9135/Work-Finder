import React from "react";
import Navbar from "./navbar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const jobDetails = () => {
  const isApplied = false;
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto my-10  ">
        <div className="flex justify-between items-center ">
          <div>
            <h1 className="font-bold text-xl">Front-End Developer</h1>
            <div className="my-5">
              <Badge className="text-blue-700 font-bold" variant="ghost">
                12 Positions
              </Badge>
              <Badge className="text-[#F83082] font-bold" variant="ghost">
                Part Time
              </Badge>
              <Badge className="text-[#127033] font-bold" variant="ghost">
                24 LPA
              </Badge>
            </div>
          </div>
          {isApplied ? (
            <Button
              disabled
              className="bg-gray-300  font-bold rounded-lg cursor-not-allowed"
              variant="outline"
            >
              Already Applied
            </Button>
          ) : (
            <Button className="bg-black text-white" variant="outline">
              Apply Now
            </Button>
          )}
        </div>
        <h1 className="border-b-2 border-b-gray-300 font-semibold py-4">
          Job Description
        </h1>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold my-1 ">
            Role:{" "}
            <span className="pl-4 font-normal text-gray-800">
              Front-End Developer
            </span>
          </h1>{" "}
          <h1 className="font-bold my-1 ">
            Location:{" "}
            <span className="pl-4 font-normal text-gray-800">
              Banglore, India
            </span>
          </h1>{" "}
          <h1 className="font-bold my-1 ">
            Description:
            <div className=" font-normal text-gray-800 pl-28 mt-[-25px] ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque tempore possimus deserunt officia, dignissimos illum
              alias placeat vel sed nemo sunt neque accusamus quis praesentium
              est dolore sit obcaecati. Cumque iure rem ut dolore earum error
              enim, consequuntur temporibus cupiditate similique ullam
              exercitationem ad deserunt, totam officiis quae reiciendis
              tenetur!
            </div>
          </h1>{" "}
          <h1 className="font-bold my-1 ">
            Experience:{" "}
            <span className="pl-4 font-normal text-gray-800">2 Years</span>
          </h1>{" "}
          <h1 className="font-bold my-1 ">
            Salary:{" "}
            <span className="pl-4 font-normal text-gray-800">12 LPA</span>
          </h1>{" "}
          <h1 className="font-bold my-1 ">
            Total Applicants:{" "}
            <span className="pl-4 font-normal text-gray-800">20</span>
          </h1>{" "}
          <h1 className="font-bold my-1 ">
            Posted Date:{" "}
            <span className="pl-4 font-normal text-gray-800">20-09-2024</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default jobDetails;
