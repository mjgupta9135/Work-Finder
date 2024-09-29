import Navbar from "@/components/navbar";
import React, { useEffect } from "react";
import Job from "@/components/job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/slices/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const browse = () => {
  useGetAllJobs();
  const dispatch = useDispatch();
  const { allJobs } = useSelector((store) => store.jobs);
  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""));
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-10">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4  ">
          {allJobs.map((job) => {
            return <Job key={job._id} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default browse;
