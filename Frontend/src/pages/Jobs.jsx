import Navbar from "@/components/navbar";
import React from "react";
import FilterCard from "@/components/filterCard";
import Job from "@/components/job";
import "../index.css";
import { useSelector } from "react-redux";
const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
const Jobs = () => {
  const { allJobs } = useSelector((store) => store.jobs);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20% ">
            <FilterCard />
          </div>

          {jobsArray.length <= 0 ? (
            <span>Job Not Found</span>
          ) : (
            <div className="flex-1 h-[88vh]  pb-5 overflow-y-auto scrollbar-hide">
              <div className="grid grid-cols-3 gap-4">
                {allJobs.map((job) => (
                  <div>
                    <Job key={job._id} job={job} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
