import React from "react";
import LatestJobCards from "./latestJobCards";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const latestJob = () => {
  const { allJobs } = useSelector((store) => store.jobs);
  return (
    <div className="mt-[-50px] max-w-7xl mx-auto my-28 animate-fadeInUp">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {allJobs?.length <= 0 ? (
          <span>No Jobs Available</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            ?.map((job) => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default latestJob;
