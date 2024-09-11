import React from "react";
import LatestJobCards from "./latestJobCards";
const randomJob = [1, 2, 3, 4, 5, 6, 7, 8];
const latestJob = () => {
  return (
    <div className="mt-[-50px] max-w-7xl mx-auto my-28 animate-fadeInUp">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {randomJob.slice(0, 6).map((item, index) => (
          <LatestJobCards />
        ))}
      </div>
    </div>
  );
};

export default latestJob;
